import React, { Component } from 'react'
// import propTypes from 'prop-types'

import styles from './index.css'
import InputCreate from '../../atoms/InputCreate'

class LanguageList extends Component {

  render() {
    const { createList, change, index } = this.props

    return (
      <div className = { styles.education }>
      <h1>Укажите языки, которыми владеете</h1>
      
      <InputCreate 
        typeInput="text" 
        className = { styles.input } 
        value = { createList.title }
        placeholder = 'Язык'
        updateField = { e => change(['language', index, 'title'], e.target.value ) }/>

      <p>Укажите уровень владения языком</p>
      <InputCreate 
        typeInput="text" 
        className = { styles.input } 
        value = { createList.description }
        placeholder = 'уровень'
        updateField = { e => change(['language', index, 'description'], e.target.value ) }/>
    </div>
    )
  }
}


export default LanguageList