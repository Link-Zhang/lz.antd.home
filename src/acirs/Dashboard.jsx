import {dashboardConstants} from '../redux/ActionTypes';

// Action Creator
export const dashboardDataLoadActionCreator = (totalHouse, avgTotalPrice, avgUnitPrice, data) => {
    return {
        type: dashboardConstants.DATA_LOAD,
        totalHouse: totalHouse,
        avgTotalPrice: avgTotalPrice,
        avgUnitPrice: avgUnitPrice,
        data: data,
    };
};

// Init state
const initState = {
    totalHouse: 0,
    avgTotalPrice: 0,
    avgUnitPrice: 0,
    data: [{}],
};

// Reducer
const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case dashboardConstants.DATA_LOAD:
            return {
                ...state,
                totalHouse: action.totalHouse,
                avgTotalPrice: action.avgTotalPrice,
                avgUnitPrice: action.avgUnitPrice,
                data: action.data,
            };
        default:
            return state;
    }
};

export default {initState, reducer};

