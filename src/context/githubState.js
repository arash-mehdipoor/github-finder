import React, { useReducer, useState } from 'react';
import axios from 'axios';
import GithubContext from './GithubContext';
import GithubReducer from './GithubReducer';
import {
    SEARCH_USERS,
    SET_LOADING,
    GET_USERS,
    CLEAR_USER,
    GET_USER,
} from './types';

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        loading: false,
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);


    return <GithubContext.Provider value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
    }}>
        {props.children}
    </GithubContext.Provider>

}

export default GithubState