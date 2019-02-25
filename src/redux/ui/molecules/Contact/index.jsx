import React, { Component } from 'react'
// import propTypes from 'prop-types'

import InputCreate from '../../atoms/InputCreate'
import styles from './index.css'

class Contact extends Component {

  render() {
    const { tags, change, phone } = this.props

    return (
      <div className = { styles.education }>
        <InputCreate 
          text = 'Укажите номер телефона'
          className = { styles.input }
          typeInput = 'text'
          value = { phone }
          placeholder = 'номер телефона'
          updateField = { e => change(['phone'], e.target.value) }/>

          <InputCreate 
            text = 'Укажите ключевые навыки'
            className = { styles.input }
            typeInput = 'text'
            value = { tags }
            placeholder = 'навыки'
            updateField = { e => change(['tags'], e.target.value) }/>
      </div>
    )
  }
}

export default Contact