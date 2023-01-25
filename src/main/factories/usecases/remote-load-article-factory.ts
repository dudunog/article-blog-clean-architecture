import { LoadArticle } from "@/domain/usecases"
import { RemoteLoadArticle } from "@/data/usecases"
import {
  makeRemoteFetchArticle,
  makeRemoteStoreArticle
} from "@/main/factories/usecases"

export const makeRemoteLoadArticle = (): LoadArticle =>
  new RemoteLoadArticle(makeRemoteFetchArticle(), makeRemoteStoreArticle())
