import React, { Fragment, Component } from "react";
import propType from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Summary from "../../ui/organisms/Summary";
import Preview from "../../ui/organisms/Preview";
import Loader from "../../ui/atoms/Loader";

import { getFavorite } from './selector'

import styles from "./index.css";
import * as actions from "../../redux/summary/actions";

class Home extends Component {
  componentDidMount() {
    const { getSummary } = this.props.actions;
    getSummary();
  }

  render() {
    const { loadSummary, summarysList } = this.props;
    const count = summarysList.length;
    const text = "Мы найдем вам резюме на любой вкус по всей стране";

    return (
      <Fragment>
        <Preview color="#83b0b9" title="Просмотр резюме" description={text} />
        {loadSummary ? (
          <Loader />
        ) : (
          <Fragment>
            <div className={styles.filter} />
            <div className={styles.summary}>
              <h1>Всего вакансий: {count}</h1>
              {summarysList.map((item, id) => (
                <Summary key={id} list={item} email={undefined} />
              ))}
            </div>
            <button className={styles.nextBtn}>Next</button>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

Home.propType = {
  summarysList: propType.array,
  loadSummary: propType.bool,
  user: propType.array
};

Home.defaultProps = {
  summarysList: [],
  loadSummary: true,
  user: []
};

const mapStateToProps = state => ({
  summarysList: getFavorite(state.summary.summarysList, state.auth.user),
  loadSummary: state.summary.loadSummary,
  user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
