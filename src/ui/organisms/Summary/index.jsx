import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { NavLink } from "react-router-dom";
import * as actions from "../../../redux/summary/actions";

import styles from "./index.css";

class Summary extends Component {
  render() {
    const {
      user,
      date,
      title,
      description,
      email,
      id,
      status,
      actions
    } = this.props;

    return (
      <div className={styles.summary}>
        <h2>{title}</h2>
        <h3>{date}</h3>
        <p>{description}</p>
        <NavLink to={`/summary-user/${id}`} className={styles.more}>
          Смотреть
        </NavLink>
        {user.email === email && (
          <button
            className={status === id ? styles.load : styles.delete}
            onClick={() => actions.deleteSummary(id)}
          >
            X
          </button>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Summary);
