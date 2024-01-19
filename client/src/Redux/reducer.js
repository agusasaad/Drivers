import { FILTER_TEAMS, GET_DRIVERS, GET_TEAMS, FILTER_BY_ORIGIN, FILTER_BY_ORDER, FILTER_BY_DATE, RESET_FILTERS, DELETE_DRIVER } from "./action-types";

const initialState = {
    allDrivers: [],
    allTeams: [],
    filterDrivers: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DRIVERS:
            return {
                ...state,
                allDrivers: action.payload,
                filterDrivers: action.payload
            }
        case GET_TEAMS:
            return {
                ...state,
                allTeams: action.payload
            }

        case FILTER_BY_ORIGIN:
            const originCopy = [...state.allDrivers]

            const filterByOrigin = originCopy.filter((origin) => {
                if (action.payload === 'All Origins') {
                    return origin
                } else if (action.payload === 'DataBase') {
                    return typeof origin.name === 'string'
                } else {
                    return typeof origin.name === 'object'
                }
            })
            return {
                ...state,
                filterDrivers: filterByOrigin
            }

        case FILTER_TEAMS:
            const teamsCopy = [...state.allDrivers]

            const filteredDrivers = teamsCopy.filter(driver => {
                if (Array.isArray(driver.teams)) {
                    return driver.teams.some(team => team.name.toLowerCase().includes(action.payload));
                } else if (typeof driver.teams === 'string') {
                    const teamsArray = driver.teams.split(',').map(team => team.trim().toLowerCase());
                    return teamsArray.includes(action.payload);
                }
            });

            return {
                ...state,
                filterDrivers: filteredDrivers
            }
        case FILTER_BY_ORDER:
            const orderCopy = [...state.filterDrivers];

            let sortedDrivers

            if (action.payload === 'A-Z') {
                sortedDrivers = orderCopy.sort((a, b) => {
                    const nameA = typeof a.name === 'string' ? a.name.toLowerCase() : `${a.name.forename}`.toLowerCase();
                    const nameB = typeof b.name === 'string' ? b.name.toLowerCase() : `${b.name.forename}`.toLowerCase();
                    return nameA.localeCompare(nameB);
                })
            } else if (action.payload === 'Z-A') {
                sortedDrivers = orderCopy.sort((a, b) => {
                    const nameA = typeof a.name === 'string' ? a.name.toLowerCase() : `${a.name.forename}`.toLowerCase();
                    const nameB = typeof b.name === 'string' ? b.name.toLowerCase() : `${b.name.forename}`.toLowerCase();
                    return nameB.localeCompare(nameA);
                })
            }
            return {
                ...state,
                filterDrivers: sortedDrivers
            }

        case FILTER_BY_DATE:
            const orderDateCopy = [...state.filterDrivers]

            let sortedDriversDate;

            if (action.payload === 'Descendente') {
                sortedDriversDate = orderDateCopy.sort((a, b) => a.dob.localeCompare(b.dob))
            } else if (action.payload === 'Ascendente') {
                sortedDriversDate = orderDateCopy.sort((a, b) => b.dob.localeCompare(a.dob))
            }

            return {
                ...state,
                filterDrivers: sortedDriversDate
            }
        case RESET_FILTERS:
            return {
                ...state,
                filterDrivers: state.allDrivers
            }
        case DELETE_DRIVER:
            const copyDrivers = [...state.filterDrivers]

            const findDriversDelete = copyDrivers.filter((driver) => driver.id !== action.payload)
            return {
                ...state,
                filterDrivers: findDriversDelete
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;