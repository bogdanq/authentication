import React, { Component } from 'react'
import Summary from '../../ui/organisms/Summary'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import propType from 'prop-types'
 
import styles from './index.css'

import * as actions from '../../redux/user/actions'
import Loader from '../../ui/atoms/Loader'

class Private extends Component {

  componentDidMount() {
    const { actions, user } = this.props

    actions.getUserSummary(user.email)
  }

  render() {
    const { userPrivateSummary, isLoading } = this.props
    const count = userPrivateSummary.length

    return (
      <div className = { styles.private }>
        {
          isLoading
          ? <Loader />
          : <div>
            <h1>Мои вакансии</h1>
            <NavLink to = '/create-summary'  className = { styles.menuLink } exact >Создать вакансию</NavLink>
            <h2 className = { styles.privateH2 }>Вакансий всего: { count }</h2>
              {
                userPrivateSummary.map((item, id) =>
                <Summary
                  key = { id }
                  title = { item.title }
                  description = { item.description }
                  email = { item.userEmail }
                  date = { item.createdAt }
                  id = { item._id }/>
                ) 
              }
          </div>
        }
      </div>
    )
  }
}

Private.propType = {
  userPrivateSummary: propType.array,
  actions: propType.object.isRequired,
  isLoading: propType.bool,
  user: propType.object.isRequired
}

Private.defaultProps = {
  summarysList: [],
  isLoading: true
}

const mapStateToProps = state => ({
  userPrivateSummary: state.user.userPrivateSummary,
  isLoading: state.user.isLoading,
  user: state.auth.user
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Private)