import React, { Component } from 'react'
import propTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import components from '../../atoms'
import styles from './index.css'

class UserSummary extends Component {

  render() {
    const { title, description, history, tags,  education, language, userEmail, phone, userId, id } = this.props
    const { History, Education, Language } = components

    return (
      <div className = { styles.body }>        
        <h1 className = { styles.bodyH1 }>{ title }</h1>
        <p className = { styles.phone }>Електронная почта: <span>{ userEmail }</span></p>
        <p className = { styles.phone }>Телефон: <span>{ phone }</span></p>
        <h1 className = { styles.ourH1 }>О себе 
          { userId === userEmail && <span className = { styles.editBtn }><NavLink to = {`/update/${id}/about`}>E</NavLink></span> } 
        </h1>
        
        <p className = { styles.description }>{ description }</p>
        <hr />

        <h1 className = { styles.ourH1 }>Опыт работы 
          { userId === userEmail && <span className = { styles.editBtn }><NavLink to = {`/update/${id}/history`}>E</NavLink></span> }
        </h1>
        {history.map((item, id) => 
          <History 
            key = { id }
            company = { item.companyName }
            title = { item.title }
            description = { item.description }
            startDate = { item.startDate }
            endDate = { item.endDate }/>
        )}
  
        <h1 className = { styles.ourH1 }>Место учебы 
          { userId === userEmail && <span className = { styles.editBtn }><NavLink to = {`/update/${id}/education`}>E</NavLink></span> }
        </h1>
        {education.map((item, id) => 
          <Education 
            key = { id }
            year = { item.year }
            institution = { item.institution }/>
        )}

        <h1 className = { styles.ourH1 }>Знание языков 
          { userId === userEmail && <span className = { styles.editBtn }><NavLink to = {`/update/${id}/language`}>E</NavLink></span> }
        </h1>
        {language.map((item, id) => 
          <Language 
            key = { id } 
            title = { item.title } 
            description = { item.description }/>
        )}  
        <h1 className = { styles.ourH1 }>Скилы 
          { userId === userEmail && <span className = { styles.editBtn }><NavLink to = {`/update/${id}/contact`}>E</NavLink></span> }
        </h1>
         <div> 
            {tags}
         </div>
      </div>
    )
  }
}

UserSummary.propTypes = {
  title: propTypes.string,
  description: propTypes.string,
  history: propTypes.array,
  tags: propTypes.string,
  education: propTypes.array,
  language: propTypes.array,
  userEmail: propTypes.string,
  phone: propTypes.string,
  userId: propTypes.string,
  id: propTypes.string.isRequired
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
  userId: ''
}

export default UserSummary