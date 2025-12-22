import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";

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
    const [isToggled, setIsToggled] = useState(false)
    return (
        <>
            <header>
                <div className='container flex justify-between '>
                    <div>contanct</div>
                    <div>social media</div>

                </div>
                <div className='container flex justify-between bg-[#046e3c] '>
                    <div >logo</div>
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
                    <div className="relative w-5 h-5">
                        <RxCross1
                            className={`absolute top-0 left-0 text-white text-[18px] transition-all duration-300
      ${isToggled ? "opacity-100 scale-100" : "opacity-0 scale-0"}
    `}
                            onClick={() => setIsToggled(false)}
                        />

                        <CiMenuBurger
                            className={`absolute top-0 left-0 text-white text-[18px] transition-all duration-300
                            ${isToggled ? "opacity-0 scale-0" : "opacity-100 scale-100"}
    `}
                            onClick={() => setIsToggled(true)}
                        />
                    </div>

                </div>
            </header>
            <div className={`${!isToggled ? "hidden" : ""}fixed z-9 top-12 h-full w-full bg-black/70`} onClick={() => setIsToggled(!isToggled)}>
                <div className={`fixed top-12 h-screen bg-red-600 w-1/2 right-0 z-20 md:hidden 
 ${!isToggled ? 'translate-x-80 transition-transform ease-in-out duration-1000' :
                        'transition-transform ease-in-out duration-1000'}`} onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                        }}>
                    <div>

                        {
                            navilinks.map((el, index) => {

                                return <li key={index}> <Link to={el.link} >{el.name}</Link> </li>

                            })
                        }

                    </div>


                </div>
            </div>

        </>
    )
}

export default Header