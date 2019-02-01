import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import propTypes from 'prop-types'

import * as actions from '../../redux/summary/actions'

import UserSummary from '../../ui/molecules/UserSummary'
import Loader from '../../ui/atoms/Loader'

class SummaryList extends Component {

  componentDidMount() {
    const { match, actions } = this.props

    actions.getSummaryById(match.params.userID, match.params.date)
  }

  render() {    
    const { userSummary, isLoadUser } = this.props

    return (
      isLoadUser
    ? <Loader />
    :<div className = 'SummaryList'>
        {
          userSummary.map((item, id) =>
            <UserSummary 
              key = { id }
              title = { item.title }
              description = { item.description }
              history = { item.history }
              tags = { item.tags }
              education = { item.education }
              language = { item.language }
              phone = { item.phone }
              userEmail = { item.userEmail }
              />
          )
        }        
      </div>
    )
  } 
}

SummaryList.propTypes = {
  match: propTypes.object.isRequired,
  userSummary: propTypes.array,
  isLoadUser: propTypes.bool
}

SummaryList.defaultProps = {
  userSummary: [],
  isLoadUser: false
}

const mapStateToProps = state => ({
  userSummary: state.summary.userSummary,
  isLoadUser: state.summary.isLoadUser,
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SummaryList)