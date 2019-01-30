import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

import molecules from '../../molecules'
import Loadash from '../../../helpers/Loadash'

import styles from './index.css'

export default function Menu({ user, authord }) {
  const { ProfileSetting } = molecules 

  return (
    <div className = { styles.header }>
      <ul className = { styles.menu }>
        <NavLink to = '/' activeClassName = { styles.active }  className = { styles.menuLink } exact >Резюме</NavLink>
        <NavLink to = '/vacanci' activeClassName = { styles.active }  className = { styles.menuLink } exact >Вакансии</NavLink>
        { !Loadash(user) ? 
          <Fragment>
            <ProfileSetting user = { user }/>
          </Fragment> :
          <Fragment>
            <NavLink to = '/signin' activeClassName={ styles.active } className = { styles.menuLink }>Войти</NavLink> 
            <NavLink to = '/signup'activeClassName={ styles.active } className = { styles.menuLink }>Регистрация</NavLink>  
          </Fragment>
        }            
      </ul>
    </div>
  )
}