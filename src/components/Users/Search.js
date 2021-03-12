import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types';
import GithubContext from '../../context/GithubContext';
const Search = ({ clearUsers, showClear, setAlert }) => {
    const githubContext = useContext(GithubContext);

    const [search, setSearch] = useState('');


    const onSubmit = (e) => {
        e.preventDefault();
        if (search === '') {
            setAlert('Plase Enter Somting', 'light')
        }
        else {
            githubContext.searchUsers(search);
            setSearch('')
        }
    }

    return (
        <>
            <form onSubmit={onSubmit} className='form'>
                <input type="text" name="text" value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="search..." />
                <input type="submit" className='btn btn-dark btn-block' />
            </form>
            {
                showClear &&
                <button onClick={clearUsers} className='btn btn-light btn-block'>Clear</button>
            }
        </>
    )
}

Search.propTypes = {
    showClear: PropTypes.bool.isRequired,
}
export default Search
