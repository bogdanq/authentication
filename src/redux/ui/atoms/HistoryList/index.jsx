import React, { Component } from 'react'
// import propTypes from 'prop-types'

import InputCreate from '../../atoms/InputCreate'
import styles from './index.css'

class HistoryList extends Component {

  render() {
    const { createList, change, index } = this.props

    return (
      <div className = { styles.education }>
        <InputCreate 
          text = 'Укажите название прошлого места работы'
          className = { styles.input }
          typeInput = 'text'
          value = { createList.companyName }
          placeholder = 'учебное заведение'
          updateField = { e => change(['history', index, 'companyName'], e.target.value) }/>

          <InputCreate 
            text = 'Ваша должность'
            className = { styles.input }
            typeInput = 'text'
            value = { createList.title }
            placeholder = 'учебное заведение'
            updateField = { e => change(['history', index, 'title'], e.target.value) }/>

          <div className = { styles.inline }>
            <div className = { styles.block }>
              <InputCreate 
                text = 'дата начала'
                className = { styles.year }
                typeInput = 'text'
                value = { createList.startDate }
                updateField = { e => change(['history', index, 'startDate'], e.target.value) }/>
            </div>
              
            <div className = { styles.block }>
              <InputCreate 
                text = 'конец'
                className = { styles.year }
                typeInput = 'text'
                value = { createList.endDate }
                updateField = { e => change(['history', index, 'endDate'], e.target.value) }/>
            </div>
          </div>

          <InputCreate 
            text = 'краткое описание обязанностей'
            className = { styles.area }
            typeInput = 'textarea'
            value = { createList.description }
            placeholder = 'учебное заведение'
            updateField = { e => change(['history', index, 'description'], e.target.value) }/>
      </div>
    )
  }
}

export default HistoryList