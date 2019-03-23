import React, { Component } from "react";
import Summary from "../Summary";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import propType from "prop-types";

import styles from "./index.css";
import { getFavorite } from './selector'

import * as actions from "../../../redux/user/actions";

class PrivateFavorites extends Component {
  componentDidMount() {
    const { actions, user } = this.props;
    actions.getSummaryFavorites(user.favoriteSummry);
  }

  render() {
    const { favorite } = this.props;
    return (
      <div className={styles.body}>
      <h1>Избранные вакансии</h1>
      <h2 className={styles.privateH2}>Вакансий всего: {favorite.length}</h2>
        {favorite.map((item) => (
          <Summary
            key={item._id}
            list={item}
            email={null}
          />
        ))}
      </div>
    );
  }
}

PrivateFavorites.propType = {
  userPrivateSummary: propType.array,
  actions: propType.object.isRequired,
  status: propType.number,
  user: propType.array,
};

PrivateFavorites.defaultProps = {
  status: null,
  user: [],
  favorite: [],
  isLoading: false
};

const mapStateToProps = state => ({
  userPrivateSummary: state.user.userPrivateSummary,
  user: state.auth.user,
  status: state.summary.status,
  favorite: getFavorite(state.user.favorite, state.auth.user),
  isLoading: state.user.isLoading
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateFavorites);
