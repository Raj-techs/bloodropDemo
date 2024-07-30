import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import DetailsGov from './components/Gov/DetailsGov'
import Nav from './Nav'
import GovstaticPg from './pages/Gov/GovstaticPg'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GovstaticPg/>}></Route>
          <Route path='/gov/details/:id' element={<DetailsGov />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
