import React, { Component } from 'react'
// import propTypes from 'prop-types'
import Loader from '../../atoms/Loader'
import InputCreate from '../../atoms/InputCreate'

import styles from './index.css'


class DescriptionSummary extends Component {
  render() {
    const { isLoadUser, change, title, description } = this.props

    return (  
      isLoadUser 
      ? <Loader />
      : <div className = { styles.description }>
        <InputCreate 
          text ='Введите название резюме'
          className = { styles.input }
          typeInput = 'text'
          value = { title }
          updateField = { e => change(['title'], e.target.value) }/>

        <InputCreate 
          text = 'Опишите себя(небольшое описание)'
          className = { styles.area }
          typeInput = 'textarea'
          value = { description }
          updateField = { e => change(['description'], e.target.value) }/>
      </div>
    )
  }
}

export default DescriptionSummary