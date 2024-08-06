import { Suspense, lazy } from "react"
import { Route, Routes } from "react-router-dom"

import Spinner from "../spinner/Spinner"
import MainLayout from "../../layouts/MainLayout"

const Page404 = lazy(() => import("../pages/404"))
const MainPage = lazy(() => import("../pages/MainPage"))
const ComicsPage = lazy(() => import("../pages/ComicsPage"))
const SingleComicLayout = lazy(() => import("../pages/singleComicLayout/SingleComicLayout"))
const SingleCharacterLayout = lazy(() => import("../pages/singleCharacterLayout/SingleCharacterLayout"))
const SinglePage = lazy(() => import("../pages/SinglePage"))

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<MainPage />} />
        <Route
          path="/comics"
          element={
            <Suspense fallback={<Spinner />}>
              <ComicsPage />
            </Suspense>
          }
        />
        <Route
          path="/comics/:id"
          element={
            <Suspense fallback={<Spinner />}>
              <SinglePage Component={SingleComicLayout} dataType="comic" />
            </Suspense>
          }
        />
        <Route
          path="/comics/:id"
          element={
            <Suspense fallback={<Spinner />}>
              <SinglePage Component={SingleCharacterLayout} dataType="character" />
            </Suspense>
          }
        />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  )
}

export default App
