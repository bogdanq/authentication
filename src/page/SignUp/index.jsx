import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import propTypes from 'prop-types'

import Preview from '../../ui/organisms/Preview'
import * as actions from '../../redux/auth/actions'

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
    const text = 'Пройдите удобную, пошаговую и быструю регистрацию'
    
    return (
      <div className = 'signin'>
        <Preview color = '#0A64A4' title = 'Зарегистрируйтесь у нас' description = { text }/>
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

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp)