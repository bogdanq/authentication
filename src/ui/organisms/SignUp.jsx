import React, { Component } from 'react'
import propTypes from 'prop-types'

class SignUp extends Component {

    state = {
        inputLogin: '',
        inputPass: '',
        inputName: '',
        inputLast: ''
    }

    render() {
        const { inputLogin, inputPass, inputLast, inputName } = this.state
        const { actions } = this.props
        
        return (
            <div className = 'signin'>
                <h1>Пожалуйста Зарегистрируйтесь</h1>
                <input type="text" value = { inputLogin } onChange = { this.handleLogin } placeholder = 'login'/> <br /><br />
                <input type="text" value = { inputPass } onChange = { this.handlePass } placeholder = 'password'/> <br /><br />
                <input type="text" value = { inputName } onChange = { this.handleName } placeholder = 'firstName'/> <br /><br />
                <input type="text" value = { inputLast } onChange = { this.handleLast } placeholder = 'lastName'/><br />
                <button onClick = {() => actions.signUp(inputLogin, inputPass, inputLast, inputName) }>Регистрация</button>
            </div>
        )
    } 

    handleLogin = ({ target }) => {
        this.setState({ inputLogin: target.value })
    }

    handlePass = ({ target }) => {
        this.setState({ inputPass: target.value })
    }

    handleName = ({ target }) => {
        this.setState({ inputName: target.value })
    }

    handleLast = ({ target }) => {
        this.setState({ inputLast: target.value })
    }
}

SignUp.propTypes = {
  actions: propTypes.object.isRequired
}

export default SignUp