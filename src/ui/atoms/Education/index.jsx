import React from 'react'
import styles from './index.css'
import propTypes from 'prop-types'

function Education({ list }) {
  return (
    <div className = { styles.body }>
      <p className = { styles.year }>{ list.year }</p>
      <p className = { styles.institution }> { list.institution }</p>
    </div>
  )  
}

Education.propTypes = {
  list: propTypes.object
}

Education.defaultProps = {
  list: {}
}

export default Education