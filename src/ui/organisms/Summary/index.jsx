import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../../redux/auth/actions'
import propTypes from 'prop-types'

import styles from './index.css'

function Summary({ userList }) {
  return (
    <div className = { styles.summary }>
      <h2>bogddan shelomanov</h2>
      <h3>8 900 590 44 36</h3>
      {/* <h4>title</h4> */}
      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sint delectus amet ad debitis officia, eius est tempora nemo ullam incidunt impedit reiciendis non vitae mollitia eligendi obcaecati provident id.</p> */}
      {/* <button className = { styles.more }>Read more</button> */}
      {userList.email === '1111111' && <button className = { styles.delete }>X</button> }
      {userList.email === '1111111' && <button className = { styles.edit }>E</button> }
    </div>
  )
}

const mapStateToProps = state => ({
  userList: state.auth.userList,
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

Summary.propTypes = {
  userList: propTypes.object
}

propTypes.default = {
  userList: {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Summary)