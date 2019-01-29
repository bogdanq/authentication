import React, { Component } from 'react'
import propTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import styles from './index.css'

import * as actions from '../../../redux/auth/actions'

import atoms from '../../atoms'

class ProfileSetting extends Component {

  render() {
    const { actions, userList, loadToken } = this.props
    const { Loader } = atoms

    return (
      loadToken
      ? <div className = { styles.setting }><Loader /> </div>
      : <div className = { styles.setting }>        
         <h2><span className = { styles.arrow }>&#9660;</span>{ userList.firstName } { userList.lastName }</h2>
          <ul>
            <li><NavLink to = '/private'>Личный кабинет</NavLink></li>
            <li><NavLink to = '/logOut' onClick = { actions.logOut }>Выйти</NavLink></li>
          </ul>
        </div>
    )
  }
}

ProfileSetting.propTypes = {
  actions: propTypes.object.isRequired,
  userList: propTypes.object.isRequired,
  loadToken: propTypes.bool
}

propTypes.default = {
  loadToken: true
}

const mapStateToPropsm = state => ({
  loadToken: state.auth.loadToken,
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToPropsm,
  mapDispatchToProps
)(ProfileSetting)