import React, { useState, useContext } from 'react'
import GithubContext from '../../context/GithubContext';
import AlertContext from '../../context/alert/AlertContext';

const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const [search, setSearch] = useState('');


    const onSubmit = (e) => {
        e.preventDefault();
        if (search === '') {
            alertContext.setAlert('Plase Enter Somting', 'light')
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
                githubContext.users.length > 0 &&
                <button onClick={githubContext.clearUser} className='btn btn-light btn-block'>Clear</button>
            }
        </>
    )
}

export default Search
