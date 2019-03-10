import React, { Component } from "react";
import propTypes from "prop-types";
import Input from "../../atoms/Input";

import styles from "./index.css";

class DescriptionSummary extends Component {
  render() {
    const { change, title, description } = this.props;

    const List = [
      {
        text: "Введите название резюме",
        typeInput: "text",
        value: title,
        placeholder: "Резюме",
        updateField: e => change(["title"], e.target.value)
      },
      {
        text: "Опишите себя(небольшое описание)",
        typeInput: "textarea",
        value: description,
        placeholder: "Описание",
        updateField: e => change(["description"], e.target.value)
      }
    ];

    return (
      <div className={styles.description}>
        {List.map((item, id) => (
          <Input
            key={id}
            text={item.text}
            className={styles.input}
            typeInput={item.typeInput}
            value={item.value}
            updateField={item.updateField}
          />
        ))}
      </div>
    );
  }
}

DescriptionSummary.propTypes = {
  title: propTypes.string,
  change: propTypes.func.isRequired,
  phone: propTypes.string
};

DescriptionSummary.defaultProps = {
  title: "",
  description: ""
};

export default DescriptionSummary;
