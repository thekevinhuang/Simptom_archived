import React, {Component} from 'react'
import {connect} from 'react-redux'
import {loginUser} from '../../actions/userActions'

const initialState = {
    email: '',
    password: '',
    currentUser: ''
}

class Login extends Component {
    constructor() {
        super()
        this.state=initialState
    }

    loginSubmit = event => {
        event.preventDefault() 
        const user={
            email: this.state.email,
            password: this.state.password
        }


        this.setState(initialState)
    }

    render() {
        //if logged in already, just redirect
        <form onSubmit={this.loginSubmit}>

        </form>
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.user.currentUser
        
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)