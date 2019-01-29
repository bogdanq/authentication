import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import propTypes from 'prop-types'

import * as actions from '../../redux/auth/actions'

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

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn)