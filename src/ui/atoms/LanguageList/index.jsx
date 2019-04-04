import React, { Component } from "react";
import propTypes from "prop-types";

import styles from "./index.css";
import Input from "../Input";
import Downshift from "../Downshift";

const list = ["A1 начальный", "А2 элементарный", "В1 средний", "В2 средне-продвинутый", "С1 продвинутый", "С2 в совершенстве"]

class LanguageList extends Component {
  render() {
    const { createList, change, index } = this.props;

    return (
      <div className={styles.education}>
        <Input
          typeInput="text"
          className={styles.input}
          value={createList.title}
          placeholder="Язык"
          updateField={e =>
            change(["language", index, "title"], e.target.value)
          }
        />

        <Downshift 
          update={(e) => change(["language", index, "description"], e.target.innerText)} 
          value={createList.description} 
          list={list}
          defaultValue='Уровень владения языком'
        />
      </div>
    );
  }
}

LanguageList.propTypes = {
  createList: propTypes.object,
  change: propTypes.func.isRequired,
  index: propTypes.number.isRequired
};

LanguageList.defaultProps = {
  createList: {}
};

export default LanguageList;
