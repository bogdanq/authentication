import React from 'react'
import { Redirect, Route } from 'react-router'

export default function QuestRout ({ Component, authord, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => !authord ? 
        <Component {...props} /> :
        <Redirect to='/' />}
    />
  )
}