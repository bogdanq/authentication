import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import propTypes from 'prop-types'

import Preview from '../../ui/organisms/Preview'
import Input from '../../ui/atoms/Input'
import * as actions from '../../redux/auth/actions'
import styles from './index.css'

class SignUp extends Component {

  state = {
    inputLogin: { value: '', error: '' },
    inputPass: { value: '', error: '' },
    inputName: { value: '', error: '' },
    inputLast: { value: '', error: '' },
  }

  render() {
    const { inputLogin, inputPass, inputLast, inputName } = this.state
    const { actions } = this.props
    const text = 'Пройдите удобную, пошаговую и быструю регистрацию'
    
    return (
      <div className = { styles.signin }>
        <Preview color = '#0A64A4' title = 'Зарегистрируйтесь у нас' description = { text }/>
        <div className = { styles.body }>
          <h1>Пожалуйста Зарегистрируйтесь</h1>
          <form className = { styles.log }>
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

            <Input 
              type="text"
              value = { inputName.value }
              onChange = { this.handleName } 
              placeholder = 'Name'
              error = { inputName.error }/>

            <Input 
              type="text"
              value = { inputLast.value }
              onChange = { this.handleLast } 
              placeholder = 'last name'
              error = { inputLast.error }/>
            <button onClick = {() => actions.signUp(inputLogin.value, inputPass.value, inputLast.value, inputName.value) }>Регистрация</button>
          </form>
        </div>
      </div>
    )
  } 

  handleLogin = ({ target }) => {
    this.setState({ inputLogin: { ...this.state.inputLogin, value: target.value } })
  }

  handlePass = ({ target }) => {
    this.setState({ inputPass: { ...this.state.inputPass, value: target.value } })
  }

  handleName = ({ target }) => {
    this.setState({ inputName: { ...this.state.inputName, value: target.value } })
  }

  handleLast = ({ target }) => {
    this.setState({ inputLast: { ...this.state.inputLast, value: target.value } })
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