import './Cards.css';
import axios from 'axios';
import Card from '../Card/Card';
import { useEffect } from 'react';

const Cards = ({ inputListener, driversReducer, driversFilterReducer, setFilteredDrivers, driversToShow }) => {

    useEffect(() => {
        const findByInput = async () => {
            try {
                if (inputListener.trim() === '') {
                    setFilteredDrivers(driversReducer);
                } else {
                    const { data } = await axios.get(`http://localhost:3001/drivers/name?name=${inputListener}`);
        
                    setFilteredDrivers(data);
                }
            } catch (error) {
                window.alert('El driver que solicita no se encuentra en la lista');
            }
        };

        findByInput();
    }, [inputListener, driversReducer]);

    useEffect(() => {
        const filterDrivers = () => {
            try {
                if (driversFilterReducer) {
                    setFilteredDrivers(driversFilterReducer)
                } else {
                    setFilteredDrivers(driversReducer)
                }
            } catch (error) {
                console.error('Error fetching drivers:', error);
            }
        };

        filterDrivers();
    }, [driversFilterReducer])



    return (
        <div className='cards'>
        {driversToShow.map((driver) => (
            <Card
                key={driver.id}
                image={typeof driver.name === 'string' ? driver.image : driver.image.url}
                id={driver.id}
                name={typeof driver.name === 'string' ? driver.name : driver.name.forename}
                surname={typeof driver.name === 'string' ? driver.lastName : driver.name.surname}
                team={Array.isArray(driver.teams) ? driver.teams.map(team => team.name).join(', ') : driver.teams}
                number={driver.number ? driver.number : '17'}
                nationality={driver.nationality}
                code={driver.code ? driver.code : 'Without Code'}
            />
        ))}
    </div>
    )
}

export default Cards
