import { FILTER_TEAMS, GET_DRIVERS, GET_TEAMS } from "./action-types";

const initialState = {
    allDrivers: [],
    allTeams: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DRIVERS:
            return {
                ...state,
                allDrivers: action.payload
            }
        case GET_TEAMS:
            return {
                ...state,
                allTeams: action.payload
            }
        case FILTER_TEAMS:
            const filteredDrivers = state.allDrivers.filter(driver => driver.team === action.payload);
            return {
                ...state,
                allDrivers: filteredDrivers && 'no hay nada' 
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;