import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({setMenuResponsive, menuResponsive}) => {
  return (
    <>
      <Header
        menuResponsive={menuResponsive}
        setMenuResponsive={setMenuResponsive}
      />

      <Outlet/>

      <Footer/>
    </>
  )
}

export default Layout