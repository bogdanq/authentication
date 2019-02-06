import React, { Component } from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import LanguageList from '../LanguageList'
import styles from './index.css'
import * as actions from '../../../redux/summary/actions'

class Language extends Component {

  render() {
    const { count, actions } = this.props
    
    return (
      <div className = { styles.education }>
        {
          [...Array(count)].map((item, id) => 
            <LanguageList
              key = { id }
              count = { count }/>
          )
        }
        <button onClick = { actions.addLanguage } className = { styles.btnAdd }>Указать еще языки</button>
        { count > 1 && <button onClick = { actions.cancelLanguage } className = { styles.btnAdd }>Отменить</button> }
      </div>
    )
  }
}

Language.propTypes = {
  actions: propTypes.object.isRequired,
  count: propTypes.number.isRequired
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
)(Language)