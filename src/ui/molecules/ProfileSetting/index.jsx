import React, { Component } from "react";
import propTypes from "prop-types";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import styles from "./index.css";

import * as actions from "../../../redux/auth/actions";

class ProfileSetting extends Component {
  render() {
    const { actions } = this.props;

    return (
      <NavLink
        to="/logOut"
        activeClassName={styles.active}
        className={styles.menuLink}
        onClick={actions.logOut}
      >
        Выйти
      </NavLink>
    );
  }
}

ProfileSetting.propTypes = {
  actions: propTypes.object.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileSetting);
