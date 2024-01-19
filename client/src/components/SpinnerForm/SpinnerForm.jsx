import React from 'react'
import './SpinnerForm.css'

const SpinnerForm = () => {
    return (
        <div className="container-spinner">
            <div class="loader"></div>
            <span className='span-spinner'> Cargando Formulario...</span>
        </div>
    )
}

export default SpinnerForm