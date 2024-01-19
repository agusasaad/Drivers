import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTeams, filterTeams, filterByOrigin, filterByOrder, filterByDate, reset_filter } from '../../Redux/actions';
import './Filters.css'

const Filters = ({setCurrentPage}) => {

    const dispatch = useDispatch();
    const teamsReducer = useSelector((state) => state.allTeams);

    useEffect(() => {
        dispatch(getAllTeams());
    }, [dispatch]);

    const handleTeams = event => {
        dispatch(filterTeams(event.target.value))
        setCurrentPage(1)
    }
    const handleOrigin = event => {
        dispatch(filterByOrigin(event.target.value))
        setCurrentPage(1)
    }
    const handleOrder = event => {
        dispatch(filterByOrder(event.target.value))
        setCurrentPage(1)
    }

    const handleOrderDate = event => {
        dispatch(filterByDate(event.target.value))
        setCurrentPage(1)
    }
    const handleResetFilters = event => {
        dispatch(reset_filter(event.target.value))
        setCurrentPage(1)
    }
    return (
        <div className='Filters'>
            <select name="DB_And_Api" onChange={handleOrigin} defaultValue=''>
                <option className='option' value="" disabled> Seleccione un origen</option>
                <option className='option' value='All Origins'>All Origins</option>
                <option className='option' value="DataBase">Data Base</option>
                <option className='option' value="Api">Api</option>
            </select>
            <select name="Teams" id="teamSelect" onChange={handleTeams} defaultValue=''>
                <option className='option' value="" disabled> Seleccione un equipo</option>
                {teamsReducer.map((team) => (
                    <option key={team.id} className='option' value={team.name}>{team.name}</option>
                ))}
            </select>
            <select name="Alfabetico" onChange={handleOrder}>
                <option className='option' value="A-Z">A-Z</option>
                <option className='option' value="Z-A">Z-A</option>
            </select>
            <select name="Date" onChange={handleOrderDate}>
                <option className='option' value="Ascendente">Ascendente</option>
                <option className='option' value="Descendente">Descendente</option>
            </select>
            <button className='button-reset' onClick={handleResetFilters}>Reset Filters</button>
        </div>
    )
}

export default Filters