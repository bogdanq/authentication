import React from 'react'
import propTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import SwipeableViews from 'react-swipeable-views'

import TabContainer from '../../ui/atoms/TabContainer'
import molecules from '../../ui/molecules'
import styles from './index.css'

class createSummary extends React.Component {
  state = {
    value: 0,
  }

  handleChangeNext = () => {
    this.setState({ value: this.state.value + 1 })
  }

  handleChangePrev = () => {
    this.setState({ value: this.state.value - 1 })
  }

  render() {
    const { theme, history } = this.props
    const { value } = this.state
    const { DescriptionSummary, Education, Language, Historys, Contact } = molecules

    return (
      <div>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}>

          <TabContainer dir={theme.direction}>
            <DescriptionSummary />
          </TabContainer>

          <TabContainer dir={theme.direction}>
            <Education />
          </TabContainer>

          <TabContainer dir={theme.direction}>
            <Language />
          </TabContainer>

          <TabContainer dir={theme.direction}>
            <Historys />
          </TabContainer>

          <TabContainer dir={theme.direction}>
            <Contact history = { history }/>
          </TabContainer>
          
        </SwipeableViews>
        { value > 0 && <button className = { styles.btn } onClick = { this.handleChangePrev }>назад</button> }
        { value < 4 && <button className = { styles.btn } onClick = { this.handleChangeNext }>далее</button> }
      </div>
    )
  }
}

createSummary.propTypes = {
  theme: propTypes.object.isRequired,
  history: propTypes.object.isRequired
}

export default withStyles({}, { withTheme: true })(createSummary)