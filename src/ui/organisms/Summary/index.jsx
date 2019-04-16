import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { NavLink } from "react-router-dom";
import momentJs from "../../../helpers/moment";
import ActionPanel from "../ActionPanel";
import propType from "prop-types";


import * as actions from "../../../redux/summary/actions";
import * as actionsUser from "../../../redux/auth/actions";

import styles from "./index.css";

class Summary extends Component {
  render() {
    const { list } = this.props;

    return (
      <div className={styles.summary}>
        <h2>{list.title}</h2>
        <h3>{momentJs(list.createdAt)}</h3>
        <p>{list.description}</p>
        <h3>Способ связи {list.userEmail}@mail.ru</h3>
        <NavLink to={`/summary-user/${list._id}`} className={styles.moreBtn}>
          Смотреть
        </NavLink>

        <ActionPanel list={list} />
      </div>
    );
  }
}

Summary.propType = {
  user: propType.object.isRequired,
  actionsUser: propType.object.isRequired,
  actions: propType.object.isRequired
}

const mapStateToProps = state => ({
  user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
  actionsUser: bindActionCreators(actionsUser, dispatch),
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Summary);
