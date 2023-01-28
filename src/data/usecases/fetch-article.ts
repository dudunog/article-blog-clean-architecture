import { HttpClient, HttpStatusCode } from "@/data/protocols/http"
import { UnexpectedError } from "@/domain/errors"
import { FetchArticle } from "@/domain/usecases"

export class RemoteFetchArticle implements FetchArticle {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<FetchArticle.Model>
  ) {}

  async fetch (id: string): Promise<FetchArticle.Model | null | undefined> {
    const httpResponse = await this.httpClient.request({
      url: this.url + id,
      method: "get"
    })

    const article = httpResponse.body

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return article
      case HttpStatusCode.noContent:
        return null
      default:
        throw new UnexpectedError()
    }
  }
}
