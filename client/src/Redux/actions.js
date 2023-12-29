import { FILTER_TEAMS, GET_DRIVERS, GET_TEAMS} from "./action-types";
import axios from 'axios';

export const getAllDrivers = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('http://localhost:3001/drivers');

            const drivers = data;

            dispatch({ type: GET_DRIVERS, payload: drivers });

        } catch (error) {

            console.error('Error fetching drivers:', error);

        }
    }
}

export const getAllTeams = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('http://localhost:3001/teams');

            const teams = data;

            dispatch({ type: GET_TEAMS, payload: teams });

        } catch (error) {

            console.error('Error fetching drivers:', error);

        }
    }
}

export const filterTeams = (team) => {
    return {
        type: FILTER_TEAMS,
        payload: team
    }
}
