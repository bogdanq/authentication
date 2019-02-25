import React from 'react'
// import propTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import SwipeableViews from 'react-swipeable-views'
import * as R from 'ramda'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import TabContainer from '../../ui/atoms/TabContainer'
import molecules from '../../ui/molecules'
import styles from './index.css'
import * as actions from '../../redux/summary/actions'

class createSummary extends React.Component {
  state = {
    value: 0,
    title: '',
    description: '',
    phone: '',
    tags: '',
    history: [{ companyName: '', title: '', description: '', startDate: '', endDate: '' }],
    education: [{ institution: '', year: '' }],
    language: [{ title: '', description: '' }],
    disabled: false
  }

  componentDidUpdate() {
    const { historys, isComplete } = this.props

    if(isComplete) {
      historys.goBack()
    }
  }
  
  handleChangeNext = () => {
    this.setState({ 
      value: this.state.value + 1
    })
  }

  handleChangePrev = () => {
    this.setState({ 
      value: this.state.value - 1
    })
  }

  render() {
    const { theme, actions } = this.props
    const { value, title, description, education, language, history, phone, tags, disabled } = this.state
    const { DescriptionSummary, Education, Language, Historys, Contact } = molecules

    return (
      <div className = { styles.body }>
      <h1 className = { styles.bodyh1 }>Создание резюме</h1>
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
        { value > 0 && <button className = { styles.btn } onClick = { this.handleChangePrev }>назад</button> }
        { value < 4 && <button className = { styles.btn } onClick = { this.handleChangeNext } disabled = { disabled }>далее</button> }
        { value === 4 && <button className = { styles.btn } onClick = { () => actions.postSummary(this.state) }>Сохранить</button>}
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
}

const mapStateToProps = state => ({
  isComplete: state.summary.isComplete
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles({}, { withTheme: true })(createSummary))