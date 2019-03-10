import React, { Component, Fragment } from "react";
import propTypes from "prop-types";

import HistoryList from "../../atoms/HistoryList";
import styles from "./index.css";

class Historys extends Component {
  render() {
    const { createList, change, addInput, deleteInput } = this.props;

    return (
      <Fragment>
        {createList.map((item, id) => (
          <HistoryList key={id} index={id} createList={item} change={change} />
        ))}

        <button onClick={() => addInput("history")} className={styles.btn}>
          Указать еще
        </button>
        {createList.length > 1 && (
          <button onClick={() => deleteInput("history")} className={styles.btn}>
            Отменить
          </button>
        )}
      </Fragment>
    );
  }
}

Historys.propTypes = {
  createList: propTypes.array,
  change: propTypes.func.isRequired,
  addInput: propTypes.func.isRequired,
  deleteInput: propTypes.func.isRequired
};

Historys.defaultProps = {
  createList: []
};

export default Historys;
