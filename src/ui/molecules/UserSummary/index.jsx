import React, { Component } from 'react'
import propTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import Tags from '../../atoms/Tags'

class UserSummary extends Component {

  render() {
    const { title, description, history, tags } = this.props
    console.log(tags)
    return (
      <div>        
          <h1>{ title }</h1>
          <p>{ description }</p>
          <p>{ history }</p>
          {tags.map(item => 
            <Tags key = { item } tags = { item }/>
          )}
         <NavLink to = '/publick'>Профиль</NavLink>
      </div>
    )
  }
}

UserSummary.propTypes = {
  title: propTypes.string,
  description: propTypes.string,
  history: propTypes.array,
  tags: propTypes.array,
}

propTypes.default = {
  title: '',
  description: '',
  history: [],
  tags: []
}

export default UserSummary