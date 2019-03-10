import React, { Fragment } from "react";
import propTypes from "prop-types";

import styles from "./index.css";

export default function Input({
  typeInput,
  value,
  updateField,
  text,
  name,
  className,
  nested,
  id
}) {
  return (
    <Fragment>
      <p className={styles.text}>{text}</p>
      {typeInput === "text" ? (
        <input
          className={className}
          type={typeInput}
          value={value}
          onChange={updateField}
          name={name}
        />
      ) : (
        <textarea
          className={className}
          type={typeInput}
          value={value}
          onChange={updateField}
          cols="50"
          rows="20"
          name={name}
        />
      )}
    </Fragment>
  );
}

Input.propTypes = {
  type: propTypes.string,
  value: propTypes.string,
  placeholder: propTypes.string,
  onChange: propTypes.func,
  error: propTypes.string
};

Input.defaultProps = {
  type: "",
  value: "",
  placeholder: "",
  onChange: () => {},
  error: ""
};
