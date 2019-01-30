import React, { Fragment, Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Summary from '../../ui/organisms/Summary'
import Filter from '../../ui/organisms/Filter'

import styles from './index.css'
import * as actions from '../../redux/summary/actions'

class Home extends Component {

  componentDidMount() {
    const { getSummary } = this.props.actions
    getSummary()
  }

  render() {
    const { summarysList } = this.props
    console.log(summarysList)

    return (
      <Fragment>
        <div className = { styles.home }>
          <div className = { styles.filter }>
            <Filter />
          </div>
          <div className = { styles.summary }>
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

const mapStateToProps = state => ({
  summarysList: state.summary.summarysList
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)