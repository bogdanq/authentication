import React, { Component } from "react";
import propTypes from "prop-types";
import { NavLink } from "react-router-dom";


import components from "../../atoms";
import ActionPanel from "../../organisms/ActionPanel";
import styles from "./index.css";

class UserSummary extends Component {
  render() {
    const { list, userId, id } = this.props;
    const { History, Education, Language } = components;

    return (
      <div className={styles.body}>
        <ActionPanel list={list}/>
        <h1 className={styles.bodyH1}>{list.title}</h1>
        <p className={styles.phone}>
          Електронная почта: <span>{list.userEmail}</span>
        </p>
        <p className={styles.phone}>
          Телефон: <span>{list.phone}</span>
        </p>
        <h1 className={styles.ourH1}>
          О себе
          {userId === list.userEmail && (
            <span className={styles.editBtn}>
              <NavLink to={`/update/${id}/about`}>Редактировать</NavLink>
            </span>
          )}
        </h1>

        <p className={styles.description}>{list.description}</p>

        <h1 className={styles.ourH1}>
          Опыт работы
          {userId === list.userEmail && (
            <span className={styles.editBtn}>
              <NavLink to={`/update/${id}/history`}>Редактировать</NavLink>
            </span>
          )}
        </h1>
        {list.history.map((item, id) => (
          <History key={id} list={item} />
        ))}

        <h1 className={styles.ourH1}>
          Место учебы
          {userId === list.userEmail && (
            <span className={styles.editBtn}>
              <NavLink to={`/update/${id}/education`}>Редактировать</NavLink>
            </span>
          )}
        </h1>
        {list.education.map((item, id) => (
          <Education key={id} list={item} />
        ))}

        <h1 className={styles.ourH1}>
          Знание языков
          {userId === list.userEmail && (
            <span className={styles.editBtn}>
              <NavLink to={`/update/${id}/language`}>Редактировать</NavLink>
            </span>
          )}
        </h1>
        {list.language.map((item, id) => (
          <Language key={id} list={item} />
        ))}
        <h1 className={styles.ourH1}>
          Скилы
          {userId === list.userEmail && (
            <span className={styles.editBtn}>
              <NavLink to={`/update/${id}/contact`}>Редактировать</NavLink>
            </span>
          )}
        </h1>
        <div className={styles.tags}>
          {list.tags.split(",").map((item, id) => (
            <p key={id}>{item}</p>
          ))}
        </div>
      </div>
    );
  }
}

UserSummary.propTypes = {
  phone: propTypes.string,
  userId: propTypes.string,
  id: propTypes.string.isRequired,
  list: propTypes.object
};

UserSummary.defaultProps = {
  userId: "",
  list: {}
};

export default UserSummary;
