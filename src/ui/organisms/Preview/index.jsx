import React, { Component } from 'react'

import styles from './index.css'
import arrow from '../../../img/arrow.png'

class Preview extends Component {

  render() {
  const { color, title, description } = this.props
  return (
    <div className = { styles.Preview } style = {{ background: color }}>
      <h2 className = { styles.h2 }>{ title }</h2>
      <h3 className = {styles.h3}>{ description }</h3>
      <img className = {styles.img} src={arrow} alt=""/>
    </div>
  )
  }
}

export default Preview