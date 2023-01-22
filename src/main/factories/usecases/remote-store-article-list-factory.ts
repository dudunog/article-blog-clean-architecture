import { StoreArticleList } from "@/domain/usecases"
import { RemoteStoreArticleList } from "@/data/usecases"
import { articleSlices } from "@/infra/state-manager/slices"
import { useAppDispatch } from "@/main/providers/redux-store-provider"

export const makeRemoteStoreArticleList = (): StoreArticleList => {
  const dispatch = useAppDispatch()
  return new RemoteStoreArticleList(dispatch, articleSlices)
}
