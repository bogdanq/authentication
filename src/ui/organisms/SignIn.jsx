import React, { Component } from 'react'

import propTypes from 'prop-types'

class SignIn extends Component {

    state = {
        inputLogin: '',
        inputPass: ''
    }

    render() {
        const { inputLogin, inputPass } = this.state
        const { actions } = this.props

        return (
            <div className = 'signin'>
                <h1>Пожалуйста войдите</h1>
                <input type="text" value = { inputLogin } onChange = { this.handleLogin } placeholder = 'login'/> <br /><br />
                <input type="text" value = { inputPass } onChange = { this.handlePass } placeholder = 'password'/><br />
                <button onClick = {() => actions.signIn(inputLogin, inputPass) }>Войти</button>
            </div>
        )
    } 

    handleLogin = ({ target }) => {
        this.setState({ inputLogin: target.value })
    }

    handlePass = ({ target }) => {
        this.setState({ inputPass: target.value })
    }
}

SignIn.propTypes = {
  actions: propTypes.object.isRequired
}

export default SignIn