import React from 'react'
import { Link } from 'react-router-dom'
import './ButtonCreateDriver.css'
import { IoCreateOutline } from "react-icons/io5"

const ButtonCreateDriver = () => {
    return (
        <div className='container-button'>
            <button className='Button-create' title='Create Driver'>
                <Link className='NavLink-button' to='/formPage'><IoCreateOutline className='icon-react'/> </Link>
            </button>
        </div>

    )
}

export default ButtonCreateDriver