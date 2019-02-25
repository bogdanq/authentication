import React, { Component, Fragment } from 'react'
// import propTypes from 'prop-types'

import HistoryList from '../../atoms/HistoryList'
import styles from './index.css'

class Historys extends Component {
  
  render() {    
    const {  createList, change, addInput, deleteInput } = this.props

    return (
      <Fragment>
        {
          createList.map((item, id) =>
          <HistoryList
            key = { id }
            index = { id }
            createList = { item }
            change = { change }/>)
        }

        <button onClick = { addInput } className = { styles.btn }>Указать еще</button>
        { createList.length > 1 && <button onClick = { () => deleteInput('history') } className = { styles.btn }>Отменить</button> }
      </Fragment>
    )
  }
}


export default Historys