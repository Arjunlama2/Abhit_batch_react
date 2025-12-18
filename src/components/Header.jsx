import React from 'react'
import { CiMenuBurger } from "react-icons/ci";

import { Link } from 'react-router'
const navilinks = [{
    name: "home",
    link: "/"
}, {
    name: "about",
    link: "/about"
}, {
    name: "services",
    link: "/services"
}, {
    name: "contact",
    link: "/contact"
}]


function Header() {
    return (
        <header>
            <div className='container flex justify-between '>
                <div>contanct</div>
                <div>social media</div>

            </div>
            <div className='container flex justify-between bg-[#046e3c] '>
                <div>logo</div>
                <nav className='hidden md:block'>
                    <ul className='flex gap-5' >
                        {
                            navilinks.map((el, index) => {
                                return <li key={index}> <Link to={el.link} >{el.name}</Link> </li>
                            })
                        }
                    </ul>
                </nav>
                <div className='hidden md:block' >
                    search
                </div>
            </div>


            <div className='fixed right-8 top-7 md:hidden '>
                <CiMenuBurger className='text-white text-[18px] ' />
            </div>
        </header>
    )
}

export default Header