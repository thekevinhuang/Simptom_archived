import React, {Component} from 'react'
import {connect} from 'react-redux'
import GoogleLogin from '../users/GoogleLogin'
import {Link} from 'react-router-dom'

class Home extends Component {

    componentDidMount() {
        //this.loginCheck
    }

    render() {
        return(
            <React.Fragment>
                Hello!
                <GoogleLogin/>
                <Link to={"/logout"}>logout</Link>
                <Link to={"/login"}>login</Link>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser:state.currentUser,
    }
}

export default connect(mapStateToProps)(Home)