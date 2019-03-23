import React, { Component } from "react";
import Summary from "../Summary";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import propType from "prop-types";

import styles from "./index.css";

import * as actions from "../../../redux/user/actions";


class PrivateList extends Component {

  componentDidMount() {
    const { actions, user } = this.props;

    actions.getUserSummary(user.email);
  }

  render() {
    const { userPrivateSummary, status } = this.props;

    return (
      <div className={styles.body}>
        <h1>Мои вакансии</h1>
        <NavLink
          to="/create-summary"
          className={styles.menuLink}
          exact
        >
          Создать вакансию
        </NavLink>
        <h2 className={styles.privateH2}>Вакансий всего: {userPrivateSummary.length}</h2>
        {userPrivateSummary.map((item, id) => (
          <Summary
            key={id}
            list={item}
          />
        ))}
      </div>
    );
  }
}

PrivateList.propType = {
  userPrivateSummary: propType.array,
  actions: propType.object.isRequired,
  isLoading: propType.bool,
  user: propType.object.isRequired,
  status: propType.number
};

PrivateList.defaultProps = {
  summarysList: [],
  status: null
};

const mapStateToProps = state => ({
  userPrivateSummary: state.user.userPrivateSummary,
  user: state.auth.user,
  status: state.summary.status
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateList);
