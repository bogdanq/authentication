import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { withStyles } from '@material-ui/core/styles'
import SwipeableViews from 'react-swipeable-views'
import propTypes from 'prop-types'
import TabContainer from '../../atoms/TabContainer'
import molecules from '../../molecules'
import styles from './index.css'

import withForm from '../../../hoc/withForm'
import { validate } from '../../../helpers/validate'
import * as actions from '../../../redux/summary/actions'

class CreateSummaryParent extends React.Component {
  state = {
    value: 0,
    update: false
  }

  componentDidMount() {
    const { match, actions } = this.props

    if(match.path === '/update/:id') {
      actions.getSummaryById(match.params.id)
      this.getUrl()
      this.setState({ update: true })
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
    const { theme, updateFields, summary, addInput, deleteInput, actions, match, status } = this.props
    const { value, update } = this.state
    const { DescriptionSummary, Education, Language, Historys, Contact } = molecules

    return (
      <div>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}>

          <TabContainer dir={theme.direction}>
            <DescriptionSummary change = { updateFields } title = { summary.title } description = { summary.description }/>
          </TabContainer>

          <TabContainer dir={theme.direction}>
            <Education  
              change = { updateFields } 
              createList = { summary.education }
              addInput = { addInput }
              deleteInput = { deleteInput }/>
          </TabContainer>

          <TabContainer dir={theme.direction}>
            <Language 
              change = { updateFields } 
              createList = { summary.language }
              addInput = { addInput }
              deleteInput = { deleteInput }/>
          </TabContainer>

          <TabContainer dir={theme.direction}>
            <Historys 
              change = { updateFields } 
              createList = { summary.history }
              addInput = { addInput }
              deleteInput = { deleteInput }/>
          </TabContainer>

          <TabContainer dir={theme.direction}>
            <Contact 
              change = { updateFields } 
              phone = { summary.phone } 
              tags = { summary.tags }/>
          </TabContainer>
        </SwipeableViews>
        {
          !update ?
          <div>
            { value > 0 && <button className = { styles.btn } onClick = { this.handleChangePrev }>назад</button> }
            { value < 4 && <button className = { styles.btn } onClick = { this.handleChangeNext } disabled = { validate(value, summary) }>далее</button> }
            { value === 4 && <button className = { status ? styles.loadBtn : styles.saveBtn }  onClick = { () => actions.postSummary(summary) } >Cохранить</button> }
          </div>
          : <button className = { styles.btn } onClick = { () => actions.putSummary(summary, match.params.id) }>save</button> 
        }
      </div>
    )
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

CreateSummaryParent.propTypes = {
  theme: propTypes.object, 
  updateFields: propTypes.func.isRequired,  
  summary: propTypes.object, 
  addInput: propTypes.func.isRequired, 
  deleteInput: propTypes.func.isRequired, 
  actions: propTypes.object, 
  match: propTypes.object, 
  status: propTypes.bool
}

CreateSummaryParent.defaultProps = {
  theme: {},
  summary: {},
  actions: {},
  match: {},
  status: false
}

const mapStateToProps = state => ({
  userSummary: state.summary.userSummary,
  status: state.summary.status
})

const  mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withForm(withStyles({}, { withTheme: true })(CreateSummaryParent)))