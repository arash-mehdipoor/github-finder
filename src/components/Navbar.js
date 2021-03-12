import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
class Navbar extends React.Component {


    static propTypes = {
        title: PropTypes.string.isRequired
    }

    render() {
        return (
            <div>
                {this.props.title}
                {this.props.icon}
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        )
    }
}


export default Navbar
