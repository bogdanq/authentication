import React, { Component } from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import styles from './index.css'
import * as actions from '../../../redux/summary/actions'

class DescriptionSummary extends Component {

  render() {
    const { actions, summaryAdd } = this.props

    return (
      <div className = { styles.description }>
        <h1>Введите название своего резюме</h1>
        <input 
          type="text" 
          className = { styles.input } 
          placeholder = 'Название резюме'
          onChange = { actions.addSummaryTitle }
          value = { summaryAdd.title }/>
          
        <p>Опишите себя(небольшое описание)</p>
        <textarea 
          cols="30" 
          rows="10" 
          className = { styles.area } 
          placeholder = 'Описание'
          onChange = { actions.addSummaryDescript }
          value = { summaryAdd.description }></textarea>
      </div>
    )
  }
}

DescriptionSummary.propTypes = {
  actions: propTypes.object.isRequired,
}

const mapStateToProps = state => ({
  summaryAdd: state.summary.summaryAdd
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DescriptionSummary)