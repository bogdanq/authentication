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
    actions.resetLoading()
    actions.getSummaryById(match.params.id)
  }

  render() {    
    const { userSummary, isLoadUser, user, match } = this.props
    console.log('summaryList', isLoadUser)
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
              userId = { user.email }
              id = { match.params.id }/>
          )
        }        
      </div>
    )
  } 
}

SummaryList.propTypes = {
  match: propTypes.object.isRequired,
  userSummary: propTypes.array,
  isLoadUser: propTypes.bool,
  user: propTypes.object
}

SummaryList.defaultProps = {
  userSummary: [],
  isLoadUser: true,
  user: {}
}

const mapStateToProps = state => ({
  userSummary: state.summary.userSummary,
  isLoadUser:  state.summary.isLoadUser,
  user:        state.auth.user,
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SummaryList)