import React from 'react'

export default function Language({ title, description }) {
  return (
    <div>
      <p>{ title }</p>
      <p>{ description }</p>
      <hr />
    </div>
  )
}