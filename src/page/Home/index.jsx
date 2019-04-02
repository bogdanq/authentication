import React, { Fragment, Component } from "react";
import propType from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Pagination from "react-js-pagination";

import Summary from "../../ui/organisms/Summary";
import Preview from "../../ui/organisms/Preview";
import Select from "../../ui/molecules/Select";
import Skelet from "../../ui/atoms/Skeleton";

import { getFavorite } from './selector'

import styles from "./index.css";
import * as actions from "../../redux/summary/actions";

class Home extends Component {

  componentDidMount() {
    const { actions, pagination, countElements, summarysList } = this.props;

    if(summarysList.length === 0) {
      actions.getSummary(pagination.page, countElements);
    }
  }

  render() {
    const { loadSummary, summarysList, pagination, countElements } = this.props;
    const current_page = pagination.page
    const pages = pagination.pages
    console.log(typeof countElements)
    return (
      <Fragment>
        <Preview color="#83b0b9" title="Просмотр резюме" description='Мы найдем вам резюме на любой вкус по всей стране' />
        {loadSummary ? (
          <Skelet />
        ) : (
          <Fragment>
            <div className={styles.filter} />
            <div id="content" className={styles.summary}>
              <h1>Показывать по:</h1>
              <Select count={countElements} onHandlerSelect={(e) => this.handleChange(e)}/>
            {summarysList.map((item, id) => (
                <Summary key={id} list={item} email={undefined} />
              ))}
            </div>
            
          </Fragment>
        )}

          <div className={styles.pagination}>
            <Pagination
              hideDisabled
              disabledClass={styles.disabled}
              itemClass={styles.nextBtn}
              activeClass={styles.ative}
              activePage={current_page}
              itemsCountPerPage={1}
              totalItemsCount={pages}
              onChange={this.handlePageChange}
            />
          </div>
      </Fragment>
    );
  }

  handlePageChange = (e) => {
    const { actions, pagination, countElements } = this.props

    if(e !== pagination.page) {
      actions.getSummary(e, countElements)
      window.scrollTo({
        top: 800,
      })
    }
  }

  handleChange(e) {
    const { actions } = this.props
    
    actions.getSummary(1, e.target.value)
    actions.getCountElements(e.target.value)
  }
}

Home.propType = {
  summarysList: propType.array,
  loadSummary: propType.bool,
  user: propType.array,
  pagination: propType.array,
  countElements: propType.string
};

Home.defaultProps = {
  summarysList: [],
  loadSummary: true,
  user: [],
  pagination: [],
  countElements: ''
};

const mapStateToProps = state => ({
  summarysList: getFavorite(state.summary.summarysList, state.auth.user),
  loadSummary: state.summary.loadSummary,
  user: state.auth.user,
  pagination: state.summary.pagination,
  countElements: state.summary.countElements
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
