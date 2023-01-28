import React, { lazy, LazyExoticComponent, Suspense } from "react"
// import { Loadable } from "@/presentation/components"
import {
  makeRemoteLoadArticleList,
  makeRemoteStoreArticleList
} from "@/main/factories/usecases"

const Loadable = (Component: LazyExoticComponent<React.FC>): React.FC => (props: any) => {
  return (
    <Suspense>
      <Component {...props} />
    </Suspense>
  )
}

// @ts-expect-error ignore
const Home = Loadable(lazy(async () => import("@/presentation/pages/home/home")))

export const makeHome: React.FC = () => {
  return (
    <Home
      loadArticleList={makeRemoteLoadArticleList()}
      storeArticleList={makeRemoteStoreArticleList()}
    />
  )
}

// const Login = Loadable(lazy(async () => import('@/pages/Login/Login')))
