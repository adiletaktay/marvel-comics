import { Outlet } from "react-router-dom"

import AppHeader from "../components/appHeader/AppHeader"

const MainLayout = () => {
  return (
    <div className="app">
      <AppHeader />
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
