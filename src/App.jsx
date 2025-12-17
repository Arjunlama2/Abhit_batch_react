import React, { Fragment } from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router'
import About from './pages/About'
import Home from './pages/Home'


function App() {
  return (<>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path={"/about"} element={<About/>} />

    </Routes>

  </>
  )

}

export default App