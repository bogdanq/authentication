import React from 'react'
import { Redirect, Route } from 'react-router'

export default function PrivateRoute ({component: Component, token, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => token ? 
        <Component {...props} /> :
        <Redirect to='/' />}
    />
  )
}