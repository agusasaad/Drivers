import React from 'react'
import { Link } from 'react-router-dom'
import logoF1 from '../../../public/img/logoF1.png'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className='Navbar-nav'>
            <Link className='logo' to='/' >
                <img  className='logoF1'src={logoF1} alt="" />
            </Link>
        </nav>
    )
}

export default NavBar