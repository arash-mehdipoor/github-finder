import React, { useEffect } from 'react'

const User = ({ user: { name, location, bio, blog,
    followers, following, public_repos }, getUser, match }) => {

    useEffect(() => {
        getUser(match.params.login)
    }, []);


    return (
        <div>
            {name} || {public_repos} || {following} || {followers} || {location} || {bio} || {blog}
        </div>
    )



}

export default User
