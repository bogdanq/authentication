import React from 'react'
// import propTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import SwipeableViews from 'react-swipeable-views'
import * as R from 'ramda'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import propTypes from 'prop-types'

import TabContainer from '../../ui/atoms/TabContainer'
import molecules from '../../ui/molecules'
import Loader from '../../ui/atoms/Loader'
import styles from './index.css'
import * as actions from '../../redux/summary/actions'

class UpdateSummary extends React.Component {
  state = {
    value: 3,
    title: '',
    description: '',
    phone: '',
    tags: '', 
    history: [{ companyName: '', title: '', description: '', startDate: '', endDate: '' }],
    education: [{ institution: '', year: '' }],
    language: [{ title: '', description: '' }],
  }

  componentDidMount() {
    const { actions, match } = this.props
    actions.resetLoading()
    actions.getSummaryById(match.params.id)
    this.getUrl()
  }

  componentDidUpdate() {
    const { historys, isComplete } = this.props
    
    if(isComplete) {
      historys.goBack()
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.isLoadUser === false) {
      this.updateState(nextProps.userSummary)
    }
  }

  render() {
    const { theme, actions, isLoadUser, match } = this.props
    const { title, description, education, language, history, phone, tags } = this.state
    const { DescriptionSummary, Education, Language, Historys, Contact } = molecules
    console.log('uodate', isLoadUser)
    return (
      isLoadUser 
      ? <Loader />
      : <div className = { styles.body }>
      <h1 className = { styles.bodyh1 }>Редактирование</h1>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}>

          <TabContainer dir={theme.direction}>
            <DescriptionSummary change = { this.updateFieldByR } title = { title } description = { description }/>
          </TabContainer>

          <TabContainer dir={theme.direction}>
            <Education  
              change = { this.updateFieldByR } 
              createList = { education }
              addInput = { this.addEducaions }
              deleteInput = { this.deleteInput }/>
          </TabContainer>

          <TabContainer dir={theme.direction}>
            <Language 
              change = { this.updateFieldByR } 
              createList = { language }
              addInput = { this.addLanguage }
              deleteInput = { this.deleteInput }/>

          </TabContainer>

          <TabContainer dir={theme.direction}>
            <Historys 
              change = { this.updateFieldByR } 
              createList = { history }
              addInput = { this.addHistory }
              deleteInput = { this.deleteInput }/>
          </TabContainer>

          <TabContainer dir={theme.direction}>
            <Contact 
              change = { this.updateFieldByR } 
              phone = { phone } 
              tags = { tags }/>
          </TabContainer>
          
        </SwipeableViews>
        <button className = { styles.btn } onClick = { () => actions.putSummary(this.state, match.params.id) }>Сохранить</button>
      </div>
    )
  }

  updateFieldByR = async (path, value) => {
    await this.setState(prev => ({
      ...prev,
      ...R.assocPath(path, value, prev)
    }))
  }

  addEducaions = () => {
    this.setState(prev => ({
      education: [...prev.education, { institution: '', year: '' }]
    }))
  }

  addLanguage = () => {
    this.setState(prev => ({
      language: [...prev.language, { title: '', description: '' }]
    }))
  }

  addHistory = () => {
    this.setState(prev => ({
      history: [...prev.history, { companyName: '', title: '', description: '' }]
    }))
  }

  deleteInput = name => {
    this.setState(prev => ({
      [name]: [...prev[name].slice(0, -1)]
    }))
  }

  updateState = (list) => {
    this.setState(prev => ({
      ...prev.state,
      title: list[0].title,
      description: list[0].description,
      phone: list[0].phone,
      tags: list[0].tags,
      history: list[0].history,
      education: list[0].education,
      language: list[0].language,
    }))
  }

  getUrl = () => {
    let pathName = window.location.pathname.split('/').slice(-1)

    switch (pathName[0]) {
      case 'about':
        return this.setState({ value: 0 })
 
      case 'education':
        return this.setState({ value: 1 })

      case 'language':
        return this.setState({ value: 2 })

      case 'history':
        return this.setState({ value: 3 })

      case 'contact':
        return this.setState({ value: 4 })
      
      default:
        return {
          ...this.state
        }
    }
  }
}

UpdateSummary.propTypes = {
  isLoadUser: propTypes.bool,
}

UpdateSummary.defaultProps = {
  isLoadUser: true
}


const mapStateToProps = state => ({
  isComplete: state.summary.isComplete,
  userSummary: state.summary.userSummary,
  isLoadUser: state.summary.isLoadUser
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles({}, { withTheme: true })(UpdateSummary))