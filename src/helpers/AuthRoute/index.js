import React from 'react'
import { Redirect, Route } from 'react-router'

export default function AuthRoute ({component: Component, user, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => user ? 
        <Component {...props} /> :
        <Redirect to='/' />}
    />
  )
}