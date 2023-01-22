import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { UnexpectedError } from '@/domain/errors'
import { HttpResposeModel } from '@/domain/models'
import { FetchArticleList } from '@/domain/usecases/fetch-article-list'

export class RemoteFetchArticleList implements FetchArticleList {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<HttpResposeModel<FetchArticleList.Model[]>>
  ) {}

  async fetchAll (): Promise<HttpResposeModel<FetchArticleList.Model[]>> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get'
    })

    const articles = httpResponse.body || []

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return articles as HttpResposeModel<FetchArticleList.Model[]>
      case HttpStatusCode.noContent:
        return null
      default:
        throw new UnexpectedError()
    }
  }
}
