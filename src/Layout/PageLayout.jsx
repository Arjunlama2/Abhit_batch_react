import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router'

function PageLayout({headerRef}) {
  return (
    <>
       <Header headerRef={headerRef}/>
       <Outlet/>
    </>


  )
}

export default PageLayout