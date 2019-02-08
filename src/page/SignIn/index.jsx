import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import propTypes from 'prop-types'

import * as actions from '../../redux/auth/actions'
import Preview from '../../ui/organisms/Preview'
import styles from './index.css'

class SignIn extends Component {

  state = {
    inputLogin: '',
    inputPass: ''
  }

  render() {
    const { inputLogin, inputPass } = this.state
    const { actions } = this.props
    const text = 'Введите логин и пароль для входа в личный кабинет'
    
    return (
      <div className = { styles.signIn }>
        <Preview color = '#343943' title = 'Войдите или зарегистрируйтесь' description = { text }/>
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

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn)