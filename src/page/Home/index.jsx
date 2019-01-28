import React from 'react'

import withCrud from '../../hoc/withCrud'

function Home({ data, update, remove }) {
  return (
    <div>
      <ul>
        <li onClick = { update }>Изменить</li>
        <li onClick = { remove }>Удалить</li>
      </ul>
    </div>
  )
}

export default withCrud(Home, 'todo')