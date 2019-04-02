import React, { Fragment } from "react";
import Skeleton from 'react-loading-skeleton';

import styles from './index.css'

export default function Skelet() {
  const arr = [{}, {}, {}, {}, {}]
  return (
    <Fragment>
      {
        arr.map((item, id) => 
        <div id="content" key={id} className={styles.summary}>
          <h2><Skeleton/></h2>
          <h3><Skeleton/></h3>
          <p><Skeleton count={5}/></p>
        </div>
        )
        }
    </Fragment>
  );
}
