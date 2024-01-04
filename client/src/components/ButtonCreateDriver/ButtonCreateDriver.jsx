import React from 'react'
import { Link } from 'react-router-dom'

const ButtonCreateDriver = () => {
    return (
        <button><Link className='NavLink' to='/formPage'>Crear Driver</Link></button>
    )
}

export default ButtonCreateDriver