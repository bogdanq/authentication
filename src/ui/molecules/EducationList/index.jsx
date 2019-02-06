import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import propTypes from 'prop-types'

import styles from './index.css'
import * as actions from '../../../redux/summary/actions'

class EducationList extends Component {

  render() {
    const { actions, count } = this.props

    return (
      <div className = { styles.education }>
      <h1>Укажите название образовательного учреждения</h1>
      <input 
        type="text" 
        id = { count }
        className = { styles.input } 
        placeholder = 'Учреждение'
        onBlur = { actions.educationTitle }
        />

      <p>Укажите год окончания обучения</p>
      <input type="number" className = { styles.year } id = { count } onBlur = { actions.lvlEducation }/>
    </div>
    )
  }
}

EducationList.propTypes = {
  actions: propTypes.object.isRequired,
  count: propTypes.number
}

EducationList.defaultProps = {
  count: 1 
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EducationList)