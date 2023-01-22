import { LoadArticleList } from '@/domain/usecases'
import { RemoteLoadArticleList } from '@/data/usecases'
import {
  makeRemoteFetchArticleList,
  makeRemoteStoreArticleList
} from '@/main/factories/usecases'

export const makeRemoteLoadArticleList = (): LoadArticleList =>
  new RemoteLoadArticleList(makeRemoteFetchArticleList(), makeRemoteStoreArticleList())
