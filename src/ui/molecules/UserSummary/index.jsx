import React, { Component } from 'react'
import propTypes from 'prop-types'

import components from '../../atoms'

class UserSummary extends Component {

  render() {
    const { title, description, history, tags,  education, language, userEmail, phone } = this.props
    const { Tags, History, Education, Language } = components

    return (
      <div>        
        <h1>{ title }</h1>
        <p>Способ связи: { userEmail }</p>
        <p>Телефон: { phone }</p>
        <h1>О себе</h1>
        <p>{ description }</p>

        {history.map((item, id) => 
          <History 
            key = { id }
            company = { item.companyName }
            title = { item.title }
            description = { item.description }/>
        )}
  
        {education.map((item, id) => 
          <Education 
            key = { id }
            year = { item.year }
            institution = { item.institution }/>
        )}
        
        <h1>Знание языков</h1>
        {language.map((item, id) => 
          <Language 
            key = { id } 
            title = { item.title } 
            description = { item.description }/>
        )}  
        <h1>Скилы</h1>
        {tags.map((item, id) => 
         <div key = { id }> 
            <Tags tags = { item }/>
         </div>
        )}
      </div>
    )
  }
}

UserSummary.propTypes = {
  title: propTypes.string,
  description: propTypes.string,
  history: propTypes.array,
  tags: propTypes.array,
  education: propTypes.array,
  language: propTypes.array,
  userEmail: propTypes.string,
  phone: propTypes.string,
}

UserSummary.defaultProps = {
  title: '',
  description: '',
  history: [],
  tags: [],
  education: [],
  language: [],
  userEmail: '',
  phone: '',
}

export default UserSummary