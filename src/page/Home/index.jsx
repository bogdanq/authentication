import React, { Fragment, Component } from 'react'
import propType from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Summary from '../../ui/organisms/Summary'
import Filter from '../../ui/organisms/Filter'
import Loader from '../../ui/atoms/Loader'

import styles from './index.css'
import * as actions from '../../redux/summary/actions'

class Home extends Component {

  componentDidMount() {
    const { getSummary } = this.props.actions
    getSummary()
  }

  render() {
    const { loadSummary } = this.props
    const summarysList = this.props.summarysList.data
    const { count } = this.props.summarysList

    return (
      loadSummary
    ? <Loader />
    : <Fragment>
        <div className = { styles.home }>
          <div className = { styles.filter }>
            <Filter />
          </div>
          <div className = { styles.summary }>
          <h1>Всего вакансий: { count }</h1>
            {
              summarysList.map((item, id) => 
                <Summary 
                  key = { id }
                  date = { item.createdAt }
                  title = { item.title }
                  description = { item.description }
                  email = { item.userEmail }/>)
            }
          </div>
        </div>
        <button className = { styles.nextBtn }>Next</button>
      </Fragment>
    )
  }
}

Home.propType = {
  summarysList: propType.array,
  loadSummary: propType.bool
}

Home.defaultProps = {
  summarysList: [],
  loadSummary: true
}

const mapStateToProps = state => ({
  summarysList: state.summary.summarysList,
  loadSummary: state.summary.loadSummary
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)