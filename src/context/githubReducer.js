import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USER
} from './types';

const GithubReducer = (state, action) => {
    switch (action.type) {
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case CLEAR_USER:
            return {
                ...state,
                users: [],
                loading: false
            }
        default:
            return state;
    }
}

export default GithubReducer