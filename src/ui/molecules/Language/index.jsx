import React, { Component } from "react";
import propTypes from "prop-types";

import LanguageList from "../../atoms/LanguageList";
import styles from "./index.css";

class Language extends Component {
  render() {
    const { createList, change, addInput, deleteInput } = this.props;

    return (
      <div className={styles.education}>
        <h1>Укажите языки, которыми владеете</h1>
        
        {createList.map((item, id) => (
          <LanguageList key={id} index={id} createList={item} change={change} />
        ))}
        <button onClick={() => addInput("language")} className={styles.btnAdd}>
          Указать еще языки
        </button>
        {createList.length > 1 && (
          <button
            onClick={() => deleteInput("language")}
            className={styles.btnAdd}
          >
            Отменить
          </button>
        )}
      </div>
    );
  }
}

Language.propTypes = {
  createList: propTypes.array,
  change: propTypes.func.isRequired,
  addInput: propTypes.func.isRequired,
  deleteInput: propTypes.func.isRequired
};

Language.defaultProps = {
  createList: []
};

export default Language;
