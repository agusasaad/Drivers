import './Cards.css';
import axios from 'axios';
import Card from '../Card/Card';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllDrivers } from '../../Redux/actions';

const Cards = ({ inputListener, driversReducer, filteredDrivers, driversFilterReducer, setFilteredDrivers }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllDrivers());
    }, [dispatch]);

    useEffect(() => {
        const findByInput = async () => {
            try {
                if (inputListener.trim() === '') {
                    setFilteredDrivers(driversReducer);
                } else {
                    const { data } = await axios.get(`http://localhost:3001/drivers/name?name=${inputListener}`);
                    const updatedDrivers = data.map(driver => {
                        const teamsArray = driver.teams ? (Array.isArray(driver.teams) ? driver.teams : [driver.teams]) : [];
                        return {
                            ...driver,
                            teams: teamsArray,
                        };
                    });
                    setFilteredDrivers(updatedDrivers);
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
            {filteredDrivers.map((driver) => {
                if (typeof driver.name === 'string') {
                    return (
                        <Card
                            key={driver.id}
                            image={driver.image}
                            id={driver.id}
                            name={driver.name}
                            team={driver.teams.map(team => team.name)}
                        />
                    )
                } else if (typeof driver.name === 'object') {
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
