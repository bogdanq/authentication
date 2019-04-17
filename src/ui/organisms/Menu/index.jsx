import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import Loadash from "../../../helpers/Loadash";
import propTypes from "prop-types";
import styles from "./index.css";

import * as actions from "../../../redux/auth/actions";

class Menu extends Component {
  render() {
    const { user, actions } = this.props;
    const logUser = [
      {
       path: '/',
       text: 'Резюме',
       style: styles.menuLink,
       onClick: this.handleClick
      },
      {
        path: '/vacanci',
        text: 'Вакансии',
        style: styles.menuLink,
        onClick: this.handleClick
       },
       {
        path: '/private',
        text: 'Личный кабинет',
        style: styles.menuLink,
        onClick: this.handleClick
       },
       {
        path: '/',
        text: 'Выйти',
        style: styles.menuLink,
        onClick: actions.logOut
       }
    ]

    const anonUser = [
      {
       path: '/',
       text: 'Резюме',
       style: styles.menuLink,
       onClick: this.handleClick
      },
      {
        path: '/vacanci',
        text: 'Вакансии',
        style: styles.menuLink,
        onClick: this.handleClick
       },
       {
        path: '/signup',
        text: 'Регистрация',
        style: styles.menuLink,
        onClick: this.handleClick
       },
       {
        path: '/signin',
        text: 'Войти',
        style: styles.menuLink,
        onClick: this.handleClick
       },
    ]

    return (
      <div className={styles.header}>
        <ul className={styles.menu}>
          {
            !Loadash(user) 
            ? logUser.map((item, id) => <NavLink to={item.path} key={id} className={item.style} onClick={item.onClick}>{item.text}</NavLink>)
            : anonUser.map((item, id) => <NavLink to={item.path} key={id} className={item.style} onClick={item.onClick}>{item.text}</NavLink> )
          }
          
        </ul>
      </div>
    );
  }
  handleClick = (e) => {
    window.scrollTo({
      top: 0
    })
  }
}

Menu.propTypes = {
  actions: propTypes.object.isRequired,
  user: propTypes.object
};

Menu.defaultProps = {
  user: {},
  actions: propTypes.object.isRequired
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
