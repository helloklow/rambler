import React from 'react'
import {connect} from 'react-redux'
import {logout} from '../actions/user.js'
import {withRouter} from 'react-router-dom'

const Logout = ({logout, history}) => {
    return (
        <form onSubmit={e => {
            e.preventDefault()
            logout()
            history.push("/")
            }
        }>
           <input type="submit" value="Logout" className="formBtn" />
        </form>
    )
}

export default withRouter(connect(null, {logout})(Logout))