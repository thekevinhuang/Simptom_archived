import React, {Component} from 'react'
import {connect} from 'react-redux'
import GoogleLogin from '../users/GoogleLogin'
import {Link} from 'react-router-dom'
import '../../css/Home.css'
import {Redirect} from 'react-router-dom'


const HomeDisplay = () => 
    <React.Fragment>
        <div className="home-grid">
            <div className="title">Welcome to Simptom</div>
            <div className="buttons"> 
                <GoogleLogin/>
                <Link to={"/logout"}>logout</Link>
                <Link to={"/signup"}>signup</Link>
                <Link to={"/login"}>login</Link> 
            </div> 
        </div>
    </React.Fragment>

class Home extends Component {

    constructor() {
        super()

        this.state={
            currentUser: ''
        }
    }    

    loginRedirect() {
        if(this.state.currentUser||this.props.currentUser) {
            return(
                <Redirect to="/dashboard"/>//change to working link later
            )
        } else {
            return (
                <HomeDisplay/>
            )
        }
    }

    render() {
        return(
            <React.Fragment>
                {this.loginRedirect()}
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