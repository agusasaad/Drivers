import { FILTER_TEAMS, GET_DRIVERS, GET_TEAMS, FILTER_BY_ORIGIN, FILTER_BY_ORDER, FILTER_BY_DATE } from "./action-types";

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
                allDrivers: action.payload
            }
        case GET_TEAMS:
            return {
                ...state,
                allTeams: action.payload
            }
        case FILTER_TEAMS:
            if (action.payload === 'All Teams') {
                return {
                    ...state,
                    filterDrivers: state.allDrivers
                };
            } else {
                const filteredDrivers = state.allDrivers.filter(driver => {
                    if (Array.isArray(driver.teams)) {
                        return driver.teams[0].name.toLowerCase().includes(action.payload);
                    } else if (typeof driver.teams === 'string') {
                        const teamsArray = driver.teams.split(',').map(team => team.trim().toLowerCase());
                        return teamsArray.includes(action.payload);
                    }
                });

                return {
                    ...state,
                    filterDrivers: filteredDrivers
                };
            }
        case FILTER_BY_ORIGIN:
            if (action.payload === 'All Origins') {
                return {
                    ...state,
                    filterDrivers: state.allDrivers
                }
            } else if (action.payload === 'DataBase') {
                const filterByDB = state.allDrivers.filter((driver) => typeof driver.name === 'string')
                return {
                    ...state,
                    filterDrivers: filterByDB
                }
            } else {
                const filterByApi = state.allDrivers.filter((driver) => typeof driver.name === 'object')
                return {
                    ...state,
                    filterDrivers: filterByApi
                }
            }
        case FILTER_BY_ORDER:
            const orderCopy = [...state.allDrivers];

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
            const orderDateCopy = [...state.allDrivers]

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
        default:
            return {
                ...state
            }
    }
}

export default reducer;