import {dashboardConstants} from '../redux/ActionTypes';

// Action Creator
export const dashboardDataLoadActionCreator = (saleHouse, avgTotalPrice, riseHouse, fallHouse, data) => {
    return {
        type: dashboardConstants.DATA_LOAD,
        saleHouse: saleHouse,
        avgTotalPrice: avgTotalPrice,
        riseHouse: riseHouse,
        fallHouse: fallHouse,
        data: data,
    };
};

// Init state
const initState = {
    saleHouse: 1111,
    avgTotalPrice: 2222,
    riseHouse: 3333,
    fallHouse: 4444,
    data: [{}],
};

// Reducer
const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case dashboardConstants.DATA_LOAD:
            return {
                ...state,
                saleHouse: action.saleHouse,
                avgTotalPrice: action.avgTotalPrice,
                riseHouse: action.riseHouse,
                fallHouse: action.fallHouse,
                data: action.data,
            };
        default:
            return state;
    }
};

export default {initState, reducer};

