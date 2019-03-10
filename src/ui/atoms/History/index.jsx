import React from "react";
import styles from "./index.css";
import propTypes from "prop-types";

export default function History({ list }) {
  return (
    <div className={styles.body}>
      <div className={styles.date}>
        <p>
          {list.startDate} - {list.endDate}
        </p>
      </div>
      <div className={styles.company}>
        <p className={styles.companyP}>{list.companyName}</p>
        <p className={styles.companyP}>{list.title}</p>
        <p>{list.description}</p>
      </div>
    </div>
  );
}

History.propTypes = {
  list: propTypes.object
};

History.defaultProps = {
  list: {}
};
