import React, { Component } from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import styles from './index.css'
import EducationList from '../EducationList'
import * as actions from '../../../redux/summary/actions'

class Education extends Component {

  render() {
    const { count, actions } = this.props
    
    return (
      <div className = { styles.education }>
        {
          [...Array(count)].map((item, id) => 
            <EducationList 
              key = { id }
              count = { count }/>
          )
        }
        <button onClick = { actions.addEducationList } className = { styles.btnAdd }>Добавить еще учреждение</button>
        { count > 1 && <button onClick = { actions.cancelEducation } className = { styles.btnAdd }>Отменить</button> }
      </div>
    )
  }
}

Education.propTypes = {
  actions: propTypes.object.isRequired,
  count: propTypes.number.isRequired
}

const mapStateToProps = state => ({
  count: state.summary.count
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Education)