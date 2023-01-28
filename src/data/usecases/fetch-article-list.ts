import { HttpClient, HttpStatusCode } from "@/data/protocols/http"
import { UnexpectedError } from "@/domain/errors"
import { ArticleListHttpResponse } from "@/domain/models"
import { FetchArticleList } from "@/domain/usecases/fetch-article-list"

export class RemoteFetchArticleList implements FetchArticleList {
  constructor (
    private readonly url: string,
    private readonly httpClient:
    HttpClient<ArticleListHttpResponse<FetchArticleList.Model[]>>
  ) {}

  async fetchAll (query: string): Promise<ArticleListHttpResponse<FetchArticleList.Model[]> | null> {
    const httpResponse = await this.httpClient.request({
      url: this.url + query,
      method: "get"
    })

    const articles = httpResponse.body || []

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return articles as ArticleListHttpResponse<FetchArticleList.Model[]>
      case HttpStatusCode.noContent:
        return null
      default:
        throw new UnexpectedError()
    }
  }
}
