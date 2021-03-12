import React, { useState } from 'react'
import UserItem from './UserItem';
import PropTypes from 'prop-types'


const Users = ({ users, loading }) => {
    if (loading) {
        return <h1>loading...</h1>
    } else {
        return (
            <div style={userStyle}>
                {users.map(user => (
                    <UserItem key={user.id} users={user} />
                ))}
            </div>
        )
    }


}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
};
Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}
export default Users
