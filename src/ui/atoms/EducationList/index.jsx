import React, { Component } from "react";
import propTypes from "prop-types";
import DatePicker, { registerLocale } from "react-datepicker";
import ru from 'date-fns/locale/ru';

import styles from "./index.css";
import Input from "../../atoms/Input";
import './data.css';

class EducationList extends Component {
  render() {
    const { createList, change, index } = this.props;
    registerLocale('ru', ru);

    return (
      <div className={styles.education}>
        <Input
          className={styles.input}
          typeInput="text"
          value={createList.institution}
          placeholder="учебное заведение"
          updateField={e =>
            change(["education", index, "institution"], e.target.value)}
        />

        <DatePicker
          selected={createList.year ? new Date(createList.year) : new Date()}
          onChange={e => change(["education", index, "year"], new Date(e))}
          dateFormat="d MMM yyyy"
          locale = 'ru'
          className={styles.inputDate}
        />
      </div>
    );
  }
}

EducationList.propTypes = {
  createList: propTypes.object,
  change: propTypes.func.isRequired,
  index: propTypes.number.isRequired
};

EducationList.defaultProps = {
  createList: {}
};

export default EducationList;
