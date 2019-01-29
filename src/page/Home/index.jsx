import React, { Fragment } from 'react'

import withCrud from '../../hoc/withCrud'
import Summary from '../../ui/organisms/Summary'
import Filter from '../../ui/organisms/Filter'

import styles from './index.css'

function Home({ data, update, remove }) {
  return (
    <Fragment>
      <div className = { styles.home }>
        <div className = { styles.filter }>
          <Filter />
        </div>
        <div className = { styles.summary }>
          <Summary />
          <Summary />
          <Summary />
          <Summary />
          <Summary />
        </div>
      </div>
      <button className = { styles.nextBtn }>Next</button>
    </Fragment>
  )
}

export default withCrud(Home, 'todo')