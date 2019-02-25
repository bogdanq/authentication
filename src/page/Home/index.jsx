import React, { Fragment, Component } from 'react'
import propType from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Summary from '../../ui/organisms/Summary'
import Preview from '../../ui/organisms/Preview'
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
    const { summarysList } = this.props
    const count = summarysList.length
    const text = 'Мы найдем вам резюме на любой вкус по всей стране'

    return (
      <Fragment>
        <Preview color = '#83b0b9' title = 'Просмотр резюме' description = { text }/>
        {
          loadSummary
          ? <Loader />
          : <Fragment>
              <div className = { styles.filter }>
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
                      email = { item.userEmail }
                      id = { item._id }/>)
                }
              </div>
              <button className = { styles.nextBtn }>Next</button>
            </Fragment>
        }
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