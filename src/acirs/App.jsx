import {appConstants} from '../redux/ActionTypes';

// Action Creator
export const appSwitchThemeActionCreator = () => {
    return {type: appConstants.THEME_SWITCH};
};

export const appSideCollapseActionCreator = () => {
    return {type: appConstants.SIDE_COLLAPSE};
};

// Init state
const initState = {
    darkTheme: false,
    sideCollapse: false,
    userName: '未登录',
};

// Reducer
const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case appConstants.THEME_SWITCH:
            return {
                ...state,
                darkTheme: !state.darkTheme
            };
        case appConstants.SIDE_COLLAPSE:
            return {
                ...state,
                sideCollapse: !state.sideCollapse
            };
        default:
            return state;
    }
};

export default {initState, reducer};
