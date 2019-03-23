import React, { Component } from "react";
import propTypes from "prop-types";
import DatePicker, { registerLocale } from "react-datepicker";
import ru from 'date-fns/locale/ru';

import Input from "../../atoms/Input";
import styles from "./index.css";
import './data.css';


class HistoryList extends Component {

  render() {
    const { createList, change, index } = this.props;
    registerLocale('ru', ru)
    return (
      <div className={styles.education}>
        <Input
          text="Укажите название прошлого места работы"
          className={styles.input}
          typeInput="text"
          value={createList.companyName}
          placeholder="учебное заведение"
          updateField={e =>
            change(["history", index, "companyName"], e.target.value)
          }
        />

        <Input
          text="Ваша должность"
          className={styles.input}
          typeInput="text"
          value={createList.title}
          placeholder="учебное заведение"
          updateField={e => change(["history", index, "title"], e.target.value)}
        />

        <div className={styles.inline}>
          <div className={styles.block}>
            <h2 className = {styles.h2Date}>Начало работы</h2>
            <DatePicker
              selected={this.props.createList.startDate}
              onChange={e => change(["history", index, "startDate"], e)}
              dateFormat="d MMM yyyy"
              locale = 'ru'
              className={styles.inputDate}
            />
          </div>

          <div className={styles.block}>
            <h2 className = {styles.h2Date}>конец работы</h2>
            <DatePicker
              selected={this.props.createList.endDate}
              onChange={e => change(["history", index, "endDate"], e)}
              dateFormat="d MMM yyyy"
              locale = 'ru'
              className={styles.inputDate}
            />
          </div>
        </div>

        <Input
          text="краткое описание обязанностей"
          className={styles.area}
          typeInput="textarea"
          value={createList.description}
          placeholder="учебное заведение"
          updateField={e =>
            change(["history", index, "description"], e.target.value)
          }
        />
      </div>
    );
  }
}

HistoryList.propTypes = {
  createList: propTypes.object,
  change: propTypes.func.isRequired,
  index: propTypes.number.isRequired
};

HistoryList.defaultProps = {
  createList: {}
};

export default HistoryList;
