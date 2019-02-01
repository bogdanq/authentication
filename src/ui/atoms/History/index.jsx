import React from 'react'

export default function History({ company, title, description }) {
  return (
    <div>
      <hr />
      <h1>Опыт работы</h1>
      <p>{ company }</p>
      <p>{ title }</p>
      <p>{ description }</p>
      <hr />
    </div>
  )
}