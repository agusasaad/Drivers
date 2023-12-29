import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { getAllTeams, filterTeams } from '../../Redux/actions';

const Filters = () => {

    const dispatch = useDispatch();
    const teamsReducer = useSelector((state) => state.allTeams);

    useEffect(() => {
        dispatch(getAllTeams());
    }, [dispatch]);

    const handleTeams = event => {
        dispatch(filterTeams(event.target.value))
    }


    return (
        <div>
            <label>Team</label>
            <select name="Teams" id="teamSelect" onChange={handleTeams}>
                {teamsReducer.map((team) => (
                    <option key={team.id} className='option' value={team.name}>{team.name}</option>
                ))}
            </select>
            <label >Origin</label>
            <select name="DataBase_And_Api">
                <option className='option' value="DataBase">Data Base</option>
                <option className='option' value="Api">Api</option>
            </select>
            <label >A-Z</label>
            <select name="Alfabetico">
                <option className='option' value="A-Z">A-Z</option>
                <option className='option' value="Z-A">Z-A</option>
            </select>
            <label >Date</label>
            <select name="Date">
                <option className='option' value="Ascendente">Ascendente</option>
                <option className='option' value="Descendente">Descendente</option>
            </select>
        </div>
    )
}

export default Filters