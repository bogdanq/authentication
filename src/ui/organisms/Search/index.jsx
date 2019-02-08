import React, { Component } from 'react'

import styles from './index.css'

class Search extends Component {
  state = {
    style: ''
  }

  componentDidUpdate() {
    this.getStyle()
  }

 render() {
  const { style } = this.getStyle()
  console.log(style)
  return (
    <div style = {{background: style}} className = { styles.search }>
      <input type="text" placeholder='Search...' className = { styles.input }/>
      <button className = { styles.enter }>Найти</button>
    </div>
  )
 }

 getStyle = () => {
  const { pathname } = this.props.history.location
  switch(true) {
    case pathname === '/':
      return {
        style: '#83b0b9'
      }

    case pathname === '/vacanci':
      return {
        style: '#d35657' 
      }

    case pathname === '/signin':
      return {
        style: '#343943'
      }
      
    case pathname === '/signup':
      return {
        style: '#0A64A4'
      }

    case pathname === '/private':
      return {
        style: '#e4b162'
      }

    default:
      return {
        style: ''
      }
  }
 }
}

export default Search