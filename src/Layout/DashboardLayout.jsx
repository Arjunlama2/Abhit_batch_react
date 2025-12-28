import React from 'react'
import { Outlet } from 'react-router'

function DashboardLayout() {
    return (
        <div className='flex'>

            <div className='w-[20vw]  bg-red-600'>
                sidebar
            </div>

            <Outlet />
        </div>
    )
}

export default DashboardLayout