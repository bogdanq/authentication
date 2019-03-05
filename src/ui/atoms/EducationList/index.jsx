import React, { Component } from 'react'
import propTypes from 'prop-types'

import styles from './index.css'
import Input from '../../atoms/Input'

class EducationList extends Component {

  render() {
    const { createList, change, index } = this.props

    const List = [
      {
        text: 'Укажите название образовательного учреждения',
        typeInput: 'text',
        value: createList.institution,
        className: styles.input,
        placeholder: 'учебное заведение',
        updateField: e => change(['education', index, 'institution'], e.target.value),
      },
      {
        text: 'Укажите ключевые навыки',
        typeInput: 'text',
        value: createList.year,
        placeholder: 'год завершения',
        className: styles.year,
        updateField:  e => change(['education', index, 'year'], e.target.value) ,
      }
    ]

    return (
      <div className = { styles.education }>
        {
          List.map((item, id) =>
            <Input 
              key = { id }
              text = { item.text }
              className = { item.className }
              typeInput = { item.typeInput }
              value = { item.value }
              placeholder = { item.placeholder }
              updateField = { item.updateField } />
        )
        }
      </div>
    )
  }
}

EducationList.propTypes = {
  createList: propTypes.object, 
  change: propTypes.func.isRequired, 
  index:  propTypes.number.isRequired, 
}

EducationList.defaultProps = {
  createList: {}, 
}

export default EducationList