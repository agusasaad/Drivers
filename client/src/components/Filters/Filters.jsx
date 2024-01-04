import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTeams, filterTeams, filterByOrigin, filterByOrder, filterByDate } from '../../Redux/actions';

const Filters = () => {

    const dispatch = useDispatch();
    const teamsReducer = useSelector((state) => state.allTeams);

    useEffect(() => {
        dispatch(getAllTeams());
    }, [dispatch]);

    const handleTeams = event => {
        dispatch(filterTeams(event.target.value))
    }
    const handleOrigin = event => {
        dispatch(filterByOrigin(event.target.value))
    }
    const handleOrder = event => {
        dispatch(filterByOrder(event.target.value))
    }

    const handleOrderDate = event => {
        dispatch(filterByDate(event.target.value))
    }
    return (
        <div>
            <label>Team</label>
            <select name="Teams" id="teamSelect" onChange={handleTeams} defaultValue="All Teams">
                <option className='option' value='All Teams'>All Teams</option>
                {teamsReducer.map((team) => (
                    <option key={team.id} className='option' value={team.name}>{team.name}</option>
                ))}
            </select>
            <label >Origin</label>
            <select name="DB_And_Api" onChange={handleOrigin}>
                <option className='option' value='All Origins'>All Origins</option>
                <option className='option' value="DataBase">Data Base</option>
                <option className='option' value="Api">Api</option>
            </select>
            <label >A-Z</label>
            <select name="Alfabetico" onChange={handleOrder}>
                <option className='option' value="A-Z">A-Z</option>
                <option className='option' value="Z-A">Z-A</option>
            </select>
            <label >Date</label>
            <select name="Date" onChange={handleOrderDate}>
                <option className='option' value="Ascendente">Ascendente</option>
                <option className='option' value="Descendente">Descendente</option>
            </select>
        </div>
    )
}

export default Filters