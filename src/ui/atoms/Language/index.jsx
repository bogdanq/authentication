import React from "react";
import styles from "./index.css";
import propTypes from "prop-types";

export default function Language({ list }) {
  return (
    <div className={styles.body}>
      <p className = {styles.title}>{list.title}</p>
      <p className = {styles.description}>{list.description}</p>
    </div>
  );
}

Language.propTypes = {
  list: propTypes.object
};

Language.defaultProps = {
  list: {}
};
