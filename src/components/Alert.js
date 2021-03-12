import React from 'react'

const Alert = ({ alert }) => {
    return (
        <div>
            {alert !== null ? <div>{alert.msg}</div> : ''}
        </div>
    )
}

export default Alert
