import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import propTypes from 'prop-types'

import * as actions from '../../redux/summary/actions'

import UserSummary from '../../ui/molecules/UserSummary'

class SummaryList extends Component {

  componentDidMount() {
    const { match, actions } = this.props

    actions.getSummaryById(match.params.userID, match.params.date)
  }

  render() {    
    const { userSummary } = this.props

    return (
      <div className = 'SummaryList'>
      {
        userSummary.map(item =>
          <UserSummary 
            key = { item._id }
            title = { item.title }
            description = { item.description }
            history = { item.history }
            tags = { item.tags }/>
        )
      }
        
        
      </div>
    )
  } 
}

SummaryList.propTypes = {
  match: propTypes.object.isRequired,
  userSummary: propTypes.array
}

propTypes.default = {
  userSummary: []
}

const mapStateToProps = state => ({
  userSummary: state.summary.userSummary
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SummaryList)