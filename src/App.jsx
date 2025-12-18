import React, { Fragment } from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router'
import About from './pages/About'
import Home from './pages/Home'
import PageLayout from './Layout/PageLayout'


function App() {
  return (<>

    <Routes>
      <Route  element={<PageLayout/>}>
      <Route index element={<Home/>}/>
      <Route path={"/about"} element={<About/>} />
      </Route>
    </Routes>
    

  </>
  )

}

export default App