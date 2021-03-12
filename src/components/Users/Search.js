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
            <form onSubmit={onSubmit}>
                <input type="text" name="text" value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="search..." />
                <input type="submit" />
            </form>
            {
                showClear &&
                <button onClick={clearUsers}>Clear</button>

            }
        </>
    )
}

Search.propTypes = {
    searchUser: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
}
export default Search