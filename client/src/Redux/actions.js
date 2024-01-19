import {GET_DRIVERS, GET_TEAMS,  FILTER_TEAMS, FILTER_BY_ORIGIN, FILTER_BY_ORDER, FILTER_BY_DATE, RESET_FILTERS, DELETE_DRIVER} from "./action-types";
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

export const filterByOrigin = (origin) => {
    return {
        type: FILTER_BY_ORIGIN,
        payload: origin
    }
}

export const filterByOrder = (order) => {
    return {
        type: FILTER_BY_ORDER,
        payload: order
    }
}

export const filterByDate = (date) => {
    return {
        type: FILTER_BY_DATE,
        payload: date
    }
}

export const reset_filter = (reset) => {
    return {
        type: RESET_FILTERS,
        payload: reset
    }
}

export const delete_driver = (driver) => {
    return {
        type: DELETE_DRIVER,
        payload: driver
    }
}