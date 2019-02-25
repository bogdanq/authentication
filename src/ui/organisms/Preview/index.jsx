import React, { Component } from 'react'
import propTypes from 'prop-types'

import styles from './index.css'
import arrow from '../../../img/arrow.png'
import Search from '../Search'

class Preview extends Component {

  state = {
    height: 0
  }

  componentDidMount() {
    const height = this.divElemtn.clientHeight
    this.setState({ height })
  }
  
  render() {
    const { color, title, description } = this.props

    return (
      <div ref = { divElemtn =>  this.divElemtn = divElemtn } className = { styles.Preview } style = {{ background: color }}>
        <Search />
        <h2 className = { styles.h2 }>{ title }</h2>
        <h3 className = {styles.h3}>{ description }</h3>
        <img className = {styles.img} src={arrow} alt="" onClick = { this.handleClick }/>
      </div>
    )
  }

  handleClick = () => {
    window.scrollTo({
      top:  this.state.height,
      behavior: 'smooth'
    })
  }
}

Preview.propTypes = {
  title: propTypes.string,
  color: propTypes.string,
  description: propTypes.string,
}

Preview.defaultProps = {
  title: '',
  color: '',
  description: '',
}

export default Preview