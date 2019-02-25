import React, { Fragment, Component } from 'react'
import { NavLink } from 'react-router-dom'

import molecules from '../../molecules'
import Loadash from '../../../helpers/Loadash'

import styles from './index.css'

class Menu extends Component {

  render() {
  const { ProfileSetting } = molecules 
  const { user } = this.props
 
  return (
    <div className = { styles.header }>
      <ul className = { styles.menu }>
        <NavLink to = '/' activeClassName = { styles.active1 }  className = { styles.menuLink } exact >Резюме</NavLink>
        <NavLink to = '/vacanci' activeClassName = { styles.active2 }  className = { styles.menuLink } exact >Вакансии</NavLink>
        { !Loadash(user) ? 
          <Fragment>
            <NavLink to = '/private' activeClassName = { styles.active5 }  className = { styles.menuLink  }>Личный кабинет</NavLink>
            <ProfileSetting user = { user }/>
          </Fragment> :
          <Fragment>
            <NavLink to = '/signin' activeClassName={ styles.active3 } className = { styles.menuLink }>Войти</NavLink> 
            <NavLink to = '/signup'activeClassName={ styles.active6 } className = { styles.menuLink }>Регистрация</NavLink>  
          </Fragment>
        }            
      </ul>
    </div>
  )
  }
}

export default Menu