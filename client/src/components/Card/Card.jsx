import './Card.css';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { delete_driver } from '../../Redux/actions';
import { RiDeleteBin7Line } from "react-icons/ri";

const Card = ({ id, image, name, surname, team, number, nationality, code }) => {
    const numeroRandom = (Math.floor(Math.random() * 100) + 1).toString();
    const defaultPhoto = 'https://cdn.motor1.com/images/mgl/O487B/s1/nuevo-logo-de-f1-2018.webp';
    const navigate = useNavigate()

    const navigateToDetail = () => {
        navigate(`/detailPage/${id}`)
    }
    const dispatch = useDispatch();

    //Funcion para eliminar el driver 
    // const handleDelete = () => {
    //     dispatch(delete_driver(id))
    // }



    return (
        <div className='card' key={id}>
            <div className='conteiner-img'>
                <div className='degradado-div' onClick={navigateToDetail}></div>
                <img className='imgCard' src={image || defaultPhoto} alt={name} />
            </div>
            <div className='info-card'>
                <h3>{name.toUpperCase()} <br />{surname.toUpperCase()}</h3>
                <h4 style={{ color: 'brown' }}>{number}</h4>
                <p className='teams'>{team}</p>
            </div>
            <div className='line'></div>
            <div className='nationality-iconF'>
                <div>
                    <span className='Title_nationality'>Nationality</span>
                    <br />
                    <p className='valor-nationality'>{nationality}</p>
                </div>
                <div>
                    <span className='Title_nationality'>Code</span>
                    <br />
                    <p className='valor-nationality'>{code}</p>
                </div>
            </div>
        </div>
    )
}

export default Card