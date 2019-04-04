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
          className={styles.input}
          typeInput="text"
          value={createList.companyName}
          placeholder="Укажите название прошлого места работы"
          updateField={e =>
            change(["history", index, "companyName"], e.target.value)
          }
        />

        <Input
          className={styles.input}
          typeInput="text"
          value={createList.title}
          placeholder="Ваша должность"
          updateField={e => change(["history", index, "title"], e.target.value)}
        />

        <div className={styles.inline}>
          <div className={styles.block}>
            <h2 className = {styles.h2Date}>С какого</h2>
            <DatePicker
              selected={createList.startDate ? new Date(createList.startDate) : new Date()}
              onChange={e => change(["history", index, "startDate"], e)}
              dateFormat="d MMM yyyy"
              locale = 'ru'
              className={styles.inputDate}
            />
          </div>

          <div className={styles.block}>
            <h2 className = {styles.h2Date}>По какое</h2>
            <DatePicker
              selected={createList.endDate ? new Date(createList.endDate ) : new Date()}
              onChange={e => change(["history", index, "endDate"], e)}
              dateFormat="d MMM yyyy"
              locale = 'ru'
              className={styles.inputDate}
            />
          </div>
        </div>

        <Input
          className={styles.area}
          typeInput="textarea"
          value={createList.description}
          placeholder="краткое описание обязанностей"
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
