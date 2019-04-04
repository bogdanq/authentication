import React, { Component } from "react";
import propTypes from "prop-types";
import styles from "./index.css";
import EducationList from "../../atoms/EducationList";

class Education extends Component {
  render() {
    const { createList, change, addInput, deleteInput } = this.props;

    return (
      <div className={styles.education}>
        <h1>Укажите название образовательного учреждения</h1>
        {createList.map((item, id) => (
          <EducationList
            key={id}
            index={id}
            createList={item}
            change={change}
          />
        ))}
        <button onClick={() => addInput("education")} className={styles.btnAdd}>
          Добавить еще учреждение
        </button>
        {createList.length > 1 && (
          <button
            onClick={() => deleteInput("education")}
            className={styles.btnAdd}
          >
            Отменить
          </button>
        )}
      </div>
    );
  }
}

Education.propTypes = {
  createList: propTypes.array,
  change: propTypes.func.isRequired,
  addInput: propTypes.func.isRequired,
  deleteInput: propTypes.func.isRequired
};

Education.defaultProps = {
  createList: []
};

export default Education;
