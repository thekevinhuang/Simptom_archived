import React, {Component} from 'react'
import {connect} from 'react-redux'

class Home extends Component {
    constructor() {
        super()
        this.state={
            currentUser: '',
            loggedin: false
        }
    }

    componentDidMount() {
        this.loginCheck
    }
}

export default connect(mapStateToProps)(Home)