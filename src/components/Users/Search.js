import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Search = ({ searchUser, clearUsers, showClear, setAlert }) => {
    const [search, setSearch] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (search === '') {
            setAlert('Plase Enter Somting', 'light')
        }
        else {
            searchUser(search);
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
    searchUser: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
}
export default Search
