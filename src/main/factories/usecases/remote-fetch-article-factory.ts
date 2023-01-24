import { FetchArticle } from "@/domain/usecases"
import { RemoteFetchArticle } from "@/data/usecases"
import { makeApiUrl } from "@/main/factories/http"
import { makeHttpClientDecorator } from "@/main/factories/decorators"

export const makeRemoteFetchArticle = (): FetchArticle =>
  new RemoteFetchArticle(makeApiUrl("/v1/posts"), makeHttpClientDecorator())
