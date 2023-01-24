import { HttpClient, HttpStatusCode } from "@/data/protocols/http"
import { UnexpectedError } from "@/domain/errors"
import { FetchArticle } from "@/domain/usecases"

export class RemoteFetchArticle implements FetchArticle {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<FetchArticle.Model>
  ) {}

  async fetch (query: string): Promise<FetchArticle.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url + query,
      method: "get"
    })

    const article = httpResponse.body

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return article as FetchArticle.Model
      case HttpStatusCode.noContent:
        return null
      default:
        throw new UnexpectedError()
    }
  }
}
