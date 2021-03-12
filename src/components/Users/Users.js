import React, { useState } from 'react'
import UserItem from './UserItem';
import PropTypes from 'prop-types'


const Users = ({ users, loading }) => {
    if (loading) {
        return <h1>loading...</h1>
    } else {
        return (

            <div className="card text-xenter">
                {
                    users.map(item => (
                        <UserItem key={item.id} users={item} />
                    ))
                }
            </div>
        )
    }


}
Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}
export default Users
