import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './index.css'

export default function Menu({ token, actions }) {
  return (
    <div className = { styles.header }>
      <ul className = { styles.menu }>
        <NavLink to = '/' activeClassName={ styles.active } exact >Домой</NavLink>
        { token ? 
          <Fragment>
            <NavLink to = '/private' activeClassName={ styles.active }>Личный кабинет</NavLink>
            <NavLink to = '/logOut' onClick = { actions.logOut } activeClassName={ styles.active }>Выйти</NavLink>
          </Fragment> :
          <Fragment>
            <NavLink to = '/signin' activeClassName={ styles.active }>Войти</NavLink> 
            <NavLink to = '/signup'activeClassName={ styles.active }>Регистрация</NavLink>  
          </Fragment>
        }            
      </ul>
    </div>
  )
}