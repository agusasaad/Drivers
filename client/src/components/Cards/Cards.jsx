import './Cards.css';
import axios from 'axios';
import Card from '../Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllDrivers } from '../../Redux/actions';

const Cards = ({inputListener}) => {
    const dispatch = useDispatch();
    const driversReducer = useSelector((state) => state.allDrivers);
    const [filteredDrivers, setFilteredDrivers] = useState(driversReducer);

    useEffect(() => {
        dispatch(getAllDrivers());
    }, [dispatch]);

    useEffect(() => {
        const filterCard = async () => {
            try {
                if (inputListener.trim() === '') {
                    setFilteredDrivers(driversReducer);
                } else {
                    const { data } = await axios.get(`http://localhost:3001/drivers/name?name=${inputListener}`);
                    setFilteredDrivers(data);
                } 
            } catch (error) {
                window.alert('El driver que solicita no se encuntra en la lista')
            }
        };

        filterCard();
    }, [inputListener, driversReducer]);

    

    return (
        <div className='cards'>
            {filteredDrivers?.map((driver) => {
                if(typeof driver.name === 'string') {
                    return (
                        <Card
                            key={driver.id}
                            image={driver.image}
                            id={driver.id}
                            name={driver.name}
                        />
                    )
                } else if (typeof driver.name === 'object'){
                    return (
                        <Card 
                            key={driver.id}
                            image={driver.image.url}
                            id={driver.id}
                            name={driver.name.forename}
                            team={driver.teams}
                        />
                    )
                }
            })}
        </div>
    )
}

export default Cards