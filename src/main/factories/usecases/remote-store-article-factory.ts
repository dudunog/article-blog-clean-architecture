import { StoreArticle } from "@/domain/usecases"
import { RemoteStoreArticle } from "@/data/usecases"
import { articleSlices } from "@/infra/state-manager/slices"
import { useAppDispatch } from "@/main/providers/redux-store-provider"

export const makeRemoteStoreArticle = (): StoreArticle => {
  const dispatch = useAppDispatch()
  return new RemoteStoreArticle(
    dispatch,
    articleSlices
  )
}
