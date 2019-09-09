import React, {Component} from 'react'
import {connect} from 'react-redux'
import GoogleLogin from '../users/GoogleLogin'
import {Link} from 'react-router-dom'
import '../../css/Home.css'

class Home extends Component {

    componentDidMount() {
        //this.loginCheck
    }

    render() {
        return(
            <React.Fragment>
                <div class="home-grid">
                    Welcome to Simptom
                    <GoogleLogin/>
                    <Link to={"/logout"}>logout</Link>
                    <Link to={"/signup"}>signup</Link>
                    <Link to={"/login"}>login</Link>   
                </div>
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