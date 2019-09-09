import React, {Component} from 'react'
import {connect} from 'react-redux'
import {userLogin} from '../../actions/userActions'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

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

        this.props.userLogin(user)
        this.setState(initialState)
    }

    loginChange = name => event => {
        this.setState({
            [name] : event.target.value
        })
    }

    render() {
        //if logged in already, just redirect
        return(
            <form onSubmit={this.loginSubmit}>
                <TextField label="email" onChange={this.loginChange("email")} value={this.state.email} margin="normal"/>

                <TextField label="password" type="password" onChange={this.loginChange("password")} value={this.state.password} margin="normal"/>

                <Button variant="contained" type="submit">
                    Login
                </Button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.user.currentUser
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userLogin: (user) => dispatch(userLogin(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)