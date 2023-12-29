import './Card.css';
import { Link } from 'react-router-dom'

const Card = ({id, image, name, team}) => {

    return (
        <div className='card' key={id}>
            <img style={{width: '200px', height: '200px'}} className='imgCard' src={image} alt={name} />
            <p> Name : {name}</p>
            <p>{team}</p>
            <Link to={`/detailPage/${id}`} className='more' >Detail</Link>
        </div>
    )
}

export default Card