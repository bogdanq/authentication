import React, { Component } from 'react'
// import propTypes from 'prop-types'

import styles from './index.css'
import InputCreate from '../../atoms/InputCreate'

class EducationList extends Component {

  render() {
    const { createList, change, index } = this.props

    return (
      <div className = { styles.education }>
      <InputCreate 
        text = 'Укажите название образовательного учреждения'
        className = { styles.input }
        typeInput = 'text'
        value = { createList.institution }
        placeholder = 'учебное заведение'
        updateField = { e => change(['education', index, 'institution'], e.target.value) }/>

        <InputCreate 
          text = 'Укажите год окончания'
          className = { styles.year }
          typeInput = 'text'
          value = { createList.year }
          placeholder = 'год завершения'
          updateField = { e => change(['education', index, 'year'], e.target.value) }/>
    </div>
    )
  }
}

export default EducationList