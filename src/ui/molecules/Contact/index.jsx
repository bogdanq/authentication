import React, { Component } from "react";
import propTypes from "prop-types";

import Input from "../../atoms/Input";
import styles from "./index.css";

class Contact extends Component {
  render() {
    const { tags, change, phone } = this.props;

    const List = [
      {
        text: "Укажите номер телефона",
        typeInput: "text",
        value: phone,
        placeholder: "номер телефона",
        updateField: e => change(["phone"], e.target.value)
      },
      {
        text: "Укажите ключевые навыки",
        typeInput: "text",
        value: tags,
        placeholder: "навыки",
        updateField: e => change(["tags"], e.target.value)
      }
    ];

    return (
      <div className={styles.education}>
        {List.map((item, id) => (
          <Input
            key={id}
            text={item.text}
            className={styles.input}
            typeInput={item.typeInput}
            value={item.value}
            placeholder={item.placeholder}
            updateField={item.updateField}
          />
        ))}
      </div>
    );
  }
}

Contact.propTypes = {
  tags: propTypes.string,
  change: propTypes.func.isRequired,
  phone: propTypes.string
};

Contact.defaultProps = {
  tags: "",
  phone: ""
};

export default Contact;
