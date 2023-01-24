import { FetchArticleList } from "@/domain/usecases"
import { RemoteFetchArticleList } from "@/data/usecases"
import { makeApiUrl } from "@/main/factories/http"
import { makeHttpClientDecorator } from "@/main/factories/decorators"

export const makeRemoteFetchArticleList = (): FetchArticleList =>
  new RemoteFetchArticleList(makeApiUrl("/v2/posts"), makeHttpClientDecorator())
