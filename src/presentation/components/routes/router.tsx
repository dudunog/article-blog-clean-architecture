import { makeArticle } from "@/main/factories/pages"
import { makeRemoteLoadArticleList, makeRemoteStoreArticleList } from "@/main/factories/usecases"
import { MainLayout } from "@/presentation/layouts"
import React, { lazy, LazyExoticComponent, Suspense } from "react"
import {
  Navigate,
  useRoutes
} from "react-router-dom"

// const Router: React.FC = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Navigate to="/home" />} />
//         <Route path="/home" element={makeHome({})} />
//         <Route path="/article/:id" element={makeArticle({})} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

const Loadable = (Component: LazyExoticComponent<React.FC>): React.FC => (props: any) => {
  return (
    <Suspense>
      <Component {...props} />
    </Suspense>
  )
}

const Router: React.FC = () => {
  return useRoutes([
    { path: '', element: <Navigate to="/home" replace /> },

    {
      path: '*',
      element: (
        <MainLayout />
      ),
      children: [
        {
          path: 'home',
          element: (
            <Home
              loadArticleList={makeRemoteLoadArticleList()}
              storeArticleList={makeRemoteStoreArticleList()}
            />
          )
        },
        {
          path: 'article/:id',
          element: makeArticle({})
        },
        {
          path: 'app',
          children: [
            { path: '', element: <Navigate to="/404" replace /> },
            { path: '', element: <Navigate to="/404" replace /> }
          ]
        }
      ]
    }
  ])
}

// @ts-expect-error ignore
const Home = Loadable(lazy(async () => import("@/presentation/pages/home/home")))

export default Router
