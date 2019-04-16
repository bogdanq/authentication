import React, { Component } from "react";
import propTypes from "prop-types";

import Input from "../../atoms/Input";
import Downshift from "../../atoms/Downshift";
import dropDown from "../../../hoc/dropDown";
import styles from "./index.css";

class Contact extends Component {

  state = {
    items: ['js', 'react', 'redux', 'Html5', 'css3', 'Git', 'PhP', 'Mongo', 'less', 'sass', 'stylys', 'next', 'rust', 'pyton', 'oracle', 'pug', 'twig'],
  }

  render() {
    const { 
      change, 
      phone, 
      tags, 
      deleteTags, 
      onChange, 
      onPressKey, 
      changeOptions,
      value
    } = this.props;

    const { items } = this.state

    const List = [
      {
        text: "Укажите номер телефона",
        typeInput: "text",
        value: phone,
        placeholder: "номер телефона",
        updateField: e => change(["phone"], e.target.value)
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

        <div className={styles.listTags}>
          {tags.map((item, id) => <p key={id} onClick={() => deleteTags(item)}>{item}</p>)}
        </div>
        
        <Downshift 
          style={styles.dropMenu}
          changeOptions={(e) => changeOptions('value', e)} 
          value={value} 
          list={items}
          type='text'
          change={onChange}
          keyPress={onPressKey}
          defaultValue='Выбирите вариант'
        />

      </div>
    );
  }

}

Contact.propTypes = {
  tags: propTypes.array,
  change: propTypes.func.isRequired,
  phone: propTypes.string,
  deleteTags: propTypes.func,
  onChange: propTypes.func,
  onPressKey: propTypes.func,
  updateFields: propTypes.func,
  value: propTypes.string
};

Contact.defaultProps = {
  tags: [],
  phone: '',
  deleteTags: () => {},
  onChange: () => {},
  onPressKey: () => {},
  updateFields: () => {},
  value: ''
};

export default dropDown(Contact);
