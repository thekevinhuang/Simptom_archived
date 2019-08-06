import React, {Component} from 'react'
import {connect} from 'react-redux'
import {userLogout} from '../../actions/userActions'
import {Link} from 'react-router-dom'

const gapi = window.gapi


class Logout extends Component {
    componentDidMount() {
        localStorage.clear()
        this.googleLogout()
    }

    googleLogout() {
        if(gapi.auth2) {
            let auth2 = gapi.auth2.getAuthInstance()
            if (auth2) {
                auth2.signOut()
            }
        }
    }
    render() {
        return(
            <React.Fragment>
                Logged out.
                <Link to={"/"}>Return to Home</Link>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userLogout: () => dispatch(userLogout())
    }
}

export default connect(null, mapDispatchToProps)(Logout)