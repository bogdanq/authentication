import React from 'react'

export default function Education({ year, institution }) {
  return (
    <div>
      <h1>Место учебы</h1>
      <p>{ year }</p>
      <p>{ institution }</p>
      <hr />
    </div>
  )
}