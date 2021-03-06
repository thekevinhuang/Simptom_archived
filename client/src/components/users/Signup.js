import React, {Component} from 'react'
import {connect} from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {userSignup} from '../../actions/userActions'

const initialState= {
    email: "",
    password: ""
}

class Signup extends Component {
    constructor() {
        super()
        this.state = initialState
    }

    signupSubmit = event => {
        event.preventDefault()
        let user = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.userSignup(user)
        this.setState(initialState)
        //write rest of signup submit
    }

    signupChange = name => event => {
        this.setState({
            [name]: event.target.value
        })
    }
    
    //write signup change
    render() {
        return (
            <form onSubmit={this.signupSubmit}>
                <TextField label="email" onChange={this.signupChange("email")} value={this.state.email} margin="normal"/>
                <TextField label="password" type="password" onChange={this.signupChange("password")} value={this.state.password} margin="normal"/>

                <Button>Sign Up!</Button>
            </form>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        userSignup: (user)=>dispatch(userSignup(user))
    }
}

export default connect(null,mapDispatchToProps)(Signup)