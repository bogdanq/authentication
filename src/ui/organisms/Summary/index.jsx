import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../../redux/auth/actions'
import propTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import styles from './index.css'

function Summary({ user, date, title, description, email }) {
  return (
    <div className = { styles.summary }>
      <h2>{ title }</h2>
      <h3>{ date }</h3>
      <p>{ description }</p>
      <NavLink to = { `/summary-user/${email}/${date}` }className = { styles.more }>Смотрет2dь</NavLink>      
      {user.email === email && <button className = { styles.delete }>X</button> }
      {user.email === email && <button className = { styles.edit }>E</button> }
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

Summary.propTypes = {
  user: propTypes.object
}

propTypes.default = {
  user: {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Summary)