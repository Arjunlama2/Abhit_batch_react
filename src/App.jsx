import React, { Fragment, useRef } from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router'
import About from './pages/About'
import Home from './pages/Home'
import PageLayout from './Layout/PageLayout'
import { IoIosArrowDropup } from "react-icons/io";
import DetailPage from './pages/DetailPage'
import ProtectedRoute from './components/ProtectedRoute'
import DashboardLayout from './Layout/DashboardLayout'
import Dashboard from './pages/Dashboard'


function App() {

  const headerRef = useRef(null)
  const scrollToTop = () => {
    headerRef.current?.scrollIntoView({
      behavior: "smooth"
    })
  }


  return (<>

    <Routes>
      <Route element={<PageLayout headerRef={headerRef} />}>
        <Route index element={<Home />} />
        <Route path={"about"} element={<About />} />
        <Route path={":id"} element={<DetailPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path='order' element={<div>this is order</div>} />
          <Route path='wishlist' element={<div>this is order</div>} />

        </Route>
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path={"dashboard"} element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='about' element={<Dashboard />} />
        </Route>

      </Route>

      
    </Routes>


    <div className='fixed bottom-5 right-0 bg-accent z-[99999] p-2 rounded-full' onClick={() => scrollToTop()}>
      <IoIosArrowDropup className='text-2xl' />
    </div>
  </>
  )

}

export default App