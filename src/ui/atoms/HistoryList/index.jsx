import React, { Component } from 'react'
import propTypes from 'prop-types'

import styles from './index.css'

class HistoryList extends Component {

  render() {
    const { addCompany, count, addTitle, addDateFinish, addDateStart, description } = this.props

    return (
      <div className = { styles.education }>
        <h1>Укажите название прошлого места работы</h1>
        <input 
          type="text" 
          id = { count }
          className = { styles.input } 
          placeholder = 'прошлое место работы'
          onBlur = { addCompany }/>

        <p>Ваша должность</p>
        <input 
          type="text" 
          id = { count }
          className = { styles.input } 
          placeholder = 'должность'
          onBlur = { addTitle }/>

        <p>Дата работы</p>
        <input 
          type="text" 
          id = { count }
          className = { styles.inputDate } 
          placeholder = 'с какого'
          onBlur = { addDateStart }/>

        <input 
          type="text" 
          id = { count }
          className = { styles.inputDate } 
          placeholder = 'по какое'
          onBlur = { addDateFinish }/>

        <p>краткое описание обязанностей</p>
        <textarea 
          type="text" 
          id = { count }
          className = { styles.input } 
          placeholder = 'краткое описание обязанностей'
          onBlur = { description }></textarea>

      </div>
    )
  }
}

HistoryList.propTypes = {
  addCompany: propTypes.func.isRequired,
  count: propTypes.number.isRequired,
  addTitle: propTypes.func.isRequired, 
  addDateFinish: propTypes.func.isRequired, 
  addDateStart: propTypes.func.isRequired, 
  description: propTypes.func.isRequired
}

export default HistoryList