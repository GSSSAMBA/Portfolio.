import React from 'react';
import './nav.css'
import { useState } from 'react';
import buf from '../images/buf.png'


const Nav = () => {

    const [showLinks, setShowLinks] = useState(false);

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }


    return (
        <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
            <img className='lion' src={buf} alt="imgfond" ></img>

            <ul className='navbar__links'>

                <li ><a href='#home' className='navbar__item slideInDown-1 nav-link navbar__link effet' onClick={handleShowLinks}>Home</a>
                </li>
                <li ><a href='#hello' className='navbar__item slideInDown-1 nav-link navbar__link effet' onClick={handleShowLinks}>About</a>
                </li>
                <li ><a href='#titre-skill ' className='navbar__item slideInDown-1 nav-link navbar__link effet' onClick={handleShowLinks}>Skill </a>
                </li>
                <li ><a href='#work' className='navbar__item slideInDown-1 nav-link navbar__link effet' onClick={handleShowLinks}>Work </a>
                </li>
                <li>
                    <a href='#contact'><div className="btn" onClick={handleShowLinks}>Contact</div></a>
                </li>
            </ul>



            <button className='navbar__burger' onClick={handleShowLinks}>
                <span className='burger-bar'></span>
            </button>

        </nav>
    );
};

export default Nav;


