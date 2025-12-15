import React from 'react'
import "./header.css"
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
            <div className='upper-header'>
                <div>contanct</div>
                <div>social media</div>

            </div>
            <div className='nav-container'>
                <div>log</div>
                <nav>
                    <ul className='nav-links'>
                        {
                            navilinks.map((el, index) => {
                                return <li key={index}> <a href={el.link}>{el.name}</a> </li>
                            })
                        }
                    </ul>
                </nav>
                <div>
                    search
                </div>
            </div>
        </header>
    )
}

export default Header