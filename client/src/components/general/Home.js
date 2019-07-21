import React, {Component} from 'react'
import {connect} from 'react-redux'
import GoogleLogin from '../users/GoogleLogin'

class Home extends Component {

    componentDidMount() {
        //this.loginCheck
    }

    render() {
        return(
            <React.Fragment>
                Hello!
                <GoogleLogin/>
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