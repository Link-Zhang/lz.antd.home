import {dashboardConstants} from '../redux/ActionTypes';

// Action Creator
export const dashboardDataLoadActionCreator = (avgTotalPrice, avgUnitPrice, saleHouse, riseHouse, fallHouse, data) => {
    return {
        type: dashboardConstants.DATA_LOAD,
        avgTotalPrice: avgTotalPrice,
        avgUnitPrice: avgUnitPrice,
        saleHouse: saleHouse,
        riseHouse: riseHouse,
        fallHouse: fallHouse,
        data: data,
    };
};

// Init state
const initState = {
    avgTotalPrice: 1111,
    avgUnitPrice: 2222,
    saleHouse: 3333,
    riseHouse: 4444,
    fallHouse: 5555,
    data: [{}],
};

// Reducer
const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case dashboardConstants.DATA_LOAD:
            return {
                ...state,
                avgTotalPrice: action.avgTotalPrice,
                avgUnitPrice: action.avgUnitPrice,
                saleHouse: action.saleHouse,
                riseHouse: action.riseHouse,
                fallHouse: action.fallHouse,
                data: action.data,
            };
        default:
            return state;
    }
};

export default {initState, reducer};

