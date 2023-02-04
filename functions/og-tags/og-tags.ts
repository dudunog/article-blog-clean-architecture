import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions"
import Cache from 'lru-cache'
import Router from 'url-router'

const HTML_URL = 'https://nimble-granita-6a6d6b.netlify.app/'
const API_ROOT = 'https://api.beta.mejorconsalud.com/wp-json/mc'

const http_cache = new Cache({
  max: 100,
  ttl: 100000 * 36 * 24,
})

const ROUTE_POST = 'route-post'

const router = new Router({
  'home': ROUTE_POST,
  'article/:article_id': ROUTE_POST
})

const cacheFetch = async (url, json = false) => {
  if (http_cache.has(url)) return http_cache.get(url);

  const request = await fetch(url);

  if (request.status >= 400) throw new Error(`unable to retrieve URL ${url}`);

  if (json) {
    const payload = await request.json();
    http_cache.set(url, payload);
    return payload;
  }

  const body = await request.text();
  http_cache.set(url, body);

  return body;
}

export const handler: Handler =
  async ({ path }: HandlerEvent, context: HandlerContext) => {
    console.log('estou entrando no handler');

    if (path.startsWith('/test')) path = path.substring(5)

    let html = await cacheFetch(HTML_URL)

    const route = router.find(path)

    html = setUrl(html, `${HTML_URL}${path}`)

    try {
      switch (route?.handler) {
        case ROUTE_POST:
          {
            const { article_id } = route.params

            const data = await cacheFetch(`${API_ROOT}/v1/posts/${article_id}`, true)

            const articleTitle = data.title ?? ''
            const articleHeadline = data.title ?? ''
            const articleImageUrl = data?.featured_media?.medium_large ?? ''

            html = setTitle(html, articleTitle)
            html = setDesc(html, articleHeadline)
            html = setImage(html, articleImageUrl)
          }

          break;
      }
    } catch (err) {
      console.error(err)
    }

    return {
      statusCode: 200,
      body: html,
      headers: {
        'Content-Type': 'text/html',
      },
    }
  }

const setTitle = (html, title) => {
  return html
    .replace(/<title>.*<\/title>/, `<title>${title}</title>`)
    .replace('</head>', `<meta property="og:title" content="${title}"></head>`);
}

const setDesc = (html, description) => {
  description = description.replaceAll(/[<>"]/g, '');

    return html
    .replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${description}"`)
    .replace('</head>', `<meta property="og:description" content="${description}"></head>`);
}

const setUrl = (html, url) => {
  return html.replace('</head>', `<meta property="og:url" content="${url}"></head>`);
}

const setImage = (html, image_url) => {
  return html.replace('</head>', `<meta property="og:image" content="${image_url}"></head>`);
}
