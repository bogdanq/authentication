import React, { Component } from 'react'
// import propTypes from 'prop-types'
import styles from './index.css'
import EducationList from '../EducationList'


class Education extends Component {

  render() {
    const { createList, change, addInput, deleteInput } = this.props

    return (
      <div className = { styles.education }>
        {
          createList.map((item, id) => 
            <EducationList 
              key = { id }
              index = { id }
              createList = { item }
              change = { change }/>
          )
        }
        <button onClick = { () => addInput('education') } className = { styles.btnAdd }>Добавить еще учреждение</button>
        { createList.length > 1 && <button onClick = { () => deleteInput('education') } className = { styles.btnAdd }>Отменить</button> }
      </div>
    )
  }
}

export default Education