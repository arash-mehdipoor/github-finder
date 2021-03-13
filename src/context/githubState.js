import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './GithubContext';
import GithubReducer from './GithubReducer';
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USER,
    GET_USER
} from './types';

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        loading: false,
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);


    // search user
    const searchUsers = async (text) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=
        ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        })
    }

    // set loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    // clear user
    const clearUser = () => dispatch({ type: CLEAR_USER });

    // get user 
    const getUser = async username => {

        setLoading()
        const res = await axios.get(`https://api.github.com/user/${username}?client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=
        ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        dispatch({
            type: GET_USER,
            payload: res.data
        })
    }




    return <GithubContext.Provider value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        searchUsers,
        clearUser,
        getUser
    }}>
        {props.children}
    </GithubContext.Provider>

}

export default GithubState