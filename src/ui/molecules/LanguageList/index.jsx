import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import propTypes from 'prop-types'

import styles from './index.css'
import * as actions from '../../../redux/summary/actions'

class LanguageList extends Component {

  render() {
    const { actions, count } = this.props

    return (
      <div className = { styles.education }>
      <h1>Укажите языки, которыми владеете</h1>
      <input 
        type="text" 
        id = { count }
        className = { styles.input } 
        placeholder = 'Язык'
        onBlur = { actions.languageTitle }/>

      <p>Укажите уровень владения языком</p>
      <input 
        type="text" 
        id = { count }
        className = { styles.input } 
        placeholder = 'уровень'
        onBlur = { actions.languageDescript }/>
    </div>
    )
  }
}

LanguageList.propTypes = {
  actions: propTypes.object.isRequired,
  count: propTypes.number.isRequired,
}

const mapStateToProps = state => ({
  count: state.summary.countLanguage
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LanguageList)