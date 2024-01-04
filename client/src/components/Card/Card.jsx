import './Card.css';
import { Link } from 'react-router-dom'

const Card = ({id, image, name, team, teambd}) => {
    const defaultPhoto = 'https://cdn.motor1.com/images/mgl/O487B/s1/nuevo-logo-de-f1-2018.webp';
    return (
        <div className='card' key={id}>
            <img style={{width: '200px', height: '200px'}} className='imgCard' src={image || defaultPhoto} alt={name} />
            <p> Name : {name}</p>
            <p>{team}</p>
            <Link to={`/detailPage/${id}`} className='more' >Detail</Link>
        </div>
    )
}

export default Card