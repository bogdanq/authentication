import React, { Component } from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import styles from './index.css'
import * as actions from '../../../redux/summary/actions'

class Contact extends Component {

  componentDidUpdate() {
    const { isComplete, history } = this.props
    isComplete && history.push('/private')
  }

  render() {
    const { actions, summaryAdd } = this.props
    
    return (
      <div className = { styles.education }>
        <h1>Укажите номер телефона</h1>
        <input 
          type="text" 
          className = { styles.input } 
          placeholder = 'телефон'
          onBlur = { actions.phoneAdd }/>

        <p>Перечислите теги(через запятую)</p>
        <input 
          type="text" 
          className = { styles.input } 
          placeholder = 'теги'
          onBlur = { actions.tagsAdd }/>
           
        <button className = { styles.btn } onClick = { () => actions.postSummary(summaryAdd) }>Сохранить</button>
      </div>
    )
  }
}

Contact.propTypes = {
  actions: propTypes.object.isRequired,
  summaryAdd: propTypes.object.isRequired,
  isComplete: propTypes.bool
}

Contact.defaultProps = {
  isComplete: false
}

const mapStateToProps = state => ({
  summaryAdd: state.summary.summaryAdd,
  isComplete: state.summary.isComplete
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact)