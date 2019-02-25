import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import propTypes from 'prop-types'

import * as actions from '../../redux/auth/actions'
import Preview from '../../ui/organisms/Preview'
import Input from '../../ui/atoms/Input'
// import validate from '../../helpers/validate'

import styles from './index.css'

class SignIn extends Component {

  state = {
    inputLogin: { value: '', error: '' },
    inputPass: { value: '', error: '' },
  }

  render() {
    const { inputLogin, inputPass } = this.state
    const text = 'Введите логин и пароль для входа в личный кабинет'
    const { authError } = this.props

    return (
      <div className = { styles.signIn }>
        <Preview color = '#343943' title = 'Войдите или зарегистрируйтесь' description = { text }/>
        <div className = { styles.body }>
          <div className = { styles.form }>
            <h1>Пожалуйста войдите</h1>
            <div className = { styles.log }>
              <form>
                <Input 
                  type="text"
                  value = { inputLogin.value }
                  onChange = { this.handleLogin } 
                  placeholder = 'login'
                  error = { inputLogin.error }/>

                <Input 
                  type="text"
                  value = { inputPass.value }
                  onChange = { this.handlePass } 
                  placeholder = 'password'
                  error = { inputPass.error }/>
                <p className = { styles.err } id = 'qqqq'>{ authError }</p>
                <button type = 'submit' onClick = { this.submit }>Войти</button>     
              </form>         
            </div>
          </div>
        </div>
      </div>
    )
  } 

  handleLogin = ({ target }) => {
    this.setState({
      inputLogin: { ...this.state.inputLogin, value: target.value }
    })
  }

  handlePass = ({ target }) => {
    this.setState({
      inputPass: { ...this.state.inputPass, value: target.value }
    })
  }

  submit = (e) => {
    const { inputLogin, inputPass } = this.state
    e.preventDefault()
  
    this.props.actions.signIn(inputLogin.value, inputPass.value)
  }

  formValid = (email, pass) => {
    return true
  }
}

SignIn.propTypes = {
  actions: propTypes.object.isRequired,
  authError: propTypes.string
}

SignIn.defaultProps = {
  authError: ''
}

const mapStateToProps = state => ({
  authError: state.auth.authError
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn)