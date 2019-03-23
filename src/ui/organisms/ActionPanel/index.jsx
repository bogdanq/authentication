import React from "react";
import propTypes from "prop-types";
import styles from "./index.css";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Button from "../../atoms/Button";

import * as actions from "../../../redux/summary/actions";
import * as actionsUser from "../../../redux/auth/actions";

const ActionPanel = ({ list, status, user, actions, actionsUser }) => {
  console.log(status)
  return (
    <div className={styles.action}>
      {user.email === list.userEmail && (
        <Button
          style={status === list._id ? styles.load : styles.more}
          change={() => actions.deleteSummary(list._id)}
          text="X"
        />
      )}

      {user.email !== list.userEmail && user.email && (
        <Button
          style={list.isFavorite ? styles.isfavorite : styles.more}
          change={() => actionsUser.toggleFavorite(list._id, user.email)}
          text={list.isFavorite ? "Добавленно" : "В избранное"}
        />
      )}

      <Button
        style={styles.comments}
        // change={() => favorite()}
        text="1"
      />
    </div>
  );
};

ActionPanel.propTypes = {
  email: propTypes.string,
  list: propTypes.object,
  user: propTypes.object,
  delet: propTypes.func,
  favorite: propTypes.func
};

ActionPanel.defaultProps = {
  email: "",
  list: {},
  user: {},
};

const mapStateToProps = state => ({
  userPrivateSummary: state.user.userPrivateSummary,
  user: state.auth.user,
  status: state.summary.status
});

const mapDispatchToProps = dispatch => ({
  actionsUser: bindActionCreators(actionsUser, dispatch),
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionPanel);
