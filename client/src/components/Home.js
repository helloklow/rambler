import React from 'react'
import {NavLink} from 'react-router-dom'

const Home = () => {
    return (
        <div className="Home">
            <span className="navLinks">
                <NavLink exact activeClassName="active" to="/signup" className="nav firstNav">Sign Up</NavLink>
                <NavLink exact activeClassName="active" to="/login" className="nav secondNav">Login</NavLink>
            </span>
            <br/><br/>
            <h2><strong>Welcome to Rambler</strong></h2>
            <p className="tagline">Travel journaling on the fly. Don't miss a thing, get rambling.</p><br/><br/>
        </div>
    )
}

export default Home