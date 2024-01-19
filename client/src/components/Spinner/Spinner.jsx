import React from 'react'
import './Spinner.css'

const Spinner = () => {
    return (
        <div className="container-spinner">
            <div className="loader"></div>
            <span className='span-spinner'> Cargando Drivers...</span>
        </div>
    )
}

export default Spinner