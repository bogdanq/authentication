import React, { Component } from 'react'
// import propTypes from 'prop-types'

import LanguageList from '../LanguageList'
import styles from './index.css'

class Language extends Component {

  render() {
    const { createList, change, addInput, deleteInput  } = this.props
    
    return (
      <div className = { styles.education }>
        {
          createList.map((item, id) => 
            <LanguageList
              key = { id }
              index = { id }
              createList = { item }
              change = { change }/>
          )
        }
        <button onClick = { () => addInput('language') } className = { styles.btnAdd }>Указать еще языки</button>
        { createList.length > 1 && <button onClick = { () => deleteInput('language') } className = { styles.btnAdd }>Отменить</button> }
      </div>
    )
  }
}

export default Language