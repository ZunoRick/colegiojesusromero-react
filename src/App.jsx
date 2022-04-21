import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from './layout/Layout'
import Home from './paginas/Home'
import Nosotros from './paginas/Nosotros'

function App() {
  const [menuResponsive, setMenuResponsive] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route 
            path="/" 
            element={<Layout 
              menuResponsive={menuResponsive}
              setMenuResponsive={setMenuResponsive}
              />}
        >
          <Route index element={<Home/>}/>
          <Route path='nosotros' element={<Nosotros/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
