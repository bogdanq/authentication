import React, { Fragment } from 'react'

import { NavLink } from 'react-router-dom'


export default function Menu({ token, actions }) {
    return (
        <div className = 'menu'>
            <NavLink to = '/' >Домой</NavLink>
            { token ? 
                <Fragment>
                    <NavLink to = '/private' >Личный кабинет</NavLink>
                    <NavLink to = '/' onClick = { actions.logOut } >Выйти</NavLink>
                </Fragment> :
                <Fragment>
                    <NavLink to = '/signin' >Войти</NavLink> 
                    <NavLink to = '/signup' >Регистрация</NavLink>  
                </Fragment>
            }            
        </div>
    )
}