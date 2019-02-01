import React from 'react'

import styles from './index.css'

export default function Loader() {
  return (
    <div className = { styles.load }>
      <div className = { styles.ring }>
          <div className = { styles.ballHolder }>
            <div className = { styles.ball }></div>
          </div>
      </div>
    </div>
  )
}