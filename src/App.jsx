import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"

import Nav from './Nav'
import GovstaticPg from './pages/Gov/GovstaticPg'
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path='/' element={<GovstaticPg/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
