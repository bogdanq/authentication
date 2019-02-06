import React, { Component, Fragment } from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../../redux/summary/actions'
import HistoryList from '../../atoms/HistoryList'
import styles from './index.css'

class Historys extends Component {

  state = {
    history: [{ 
      date: []
    }],
    count: 1
  }

  render() {    
    const { count } = this.state

    return (
      <Fragment>
        {
          [...Array(count)].map((item, id) =>
          <HistoryList
            key = { id }
            addCompany = { this.addCompany } 
            count = { count }
            addTitle = { this.addTitle }
            addDateStart = { this.addDateStart }
            addDateFinish = { this.addDateFinish }
            description = { this.description }/>)
        }

        <button onClick = { this.hendleCount } className = { styles.btn }>Указать еще</button>
        { count > 1 && <button onClick = { this.removeCount } className = { styles.btn }>Отменить</button> }
      </Fragment>
    )
  }

  addCompany = ({ target }) => {
    this.setState(state => ({
      history: [state.history.find(obj => 
        obj.id !== target.id ), { id: target.id, companyName: target.value }]
    }))
  }

  addTitle = ({ target }) => {
    this.setState({
      history: [...this.state.history.map(obj => 
        obj.id === target.id ? { ...obj, title: target.value } : obj
      )]
    })
  }

  addDateStart = ({ target }) => {
    this.setState({
      history: [...this.state.history.map(obj => 
        obj.id === target.id ? { ...obj, date: { start: target.value } } : obj
      )]
    })
  }

  addDateFinish = ({ target }) => {
    this.setState({
      history: [...this.state.history.map(obj => 
        obj.id === target.id ? { ...obj, date: { ...obj.date, end: target.value } } : obj
      )]
    })
  }

  description = async ({ target }) => {
    await this.setState({
      history: [...this.state.history.map(obj => 
        obj.id === target.id ? { ...obj, description: target.value } : obj
      )]
    })
    await this.props.actions.historyAdd(this.state.history)
  }

  hendleCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  removeCount = async () => {
    await this.setState({
      count: this.state.count - 1
    })
    await this.props.actions.historyDel()
  }
}

Historys.propTypes = {
  actions: propTypes.object.isRequired
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Historys)