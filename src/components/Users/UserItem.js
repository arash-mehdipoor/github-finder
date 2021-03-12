import React from 'react'
import { Link } from 'react-router-dom'
const UserItem = ({ users: { avatar_url, login } }) => {

    return (
        <div className="card text-xenter">
            <img src={avatar_url} alt="" className="round-img" style={{ width: '60px' }} />
            <h3>{login}</h3>
            <div>
                <Link to={`/user/${login}`}>more</Link>
            </div>
        </div>
    )

}

export default UserItem
