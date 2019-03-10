import React, { Component, Fragment } from "react";
import { Route, Switch, Router, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import propTypes from "prop-types";

import components from "./page";
import Menu from "./ui/organisms/Menu";

import Loader from "./ui/atoms/Loader";

import styles from "./index.css";
import history from "./helpers/history";

import * as actions from "./redux/auth/actions";

const { Home, SignIn, SignUp, Private, SummaryList, CreateSummary, Vacanci, UpdateSummary } = components;

class App extends Component {
  componentDidMount() {
    const { user } = this.props;
    if (user) {
      this.props.actions.getUser();
    }
  }

  render() {
    const { user, loading } = this.props;

    return (
      <div className={styles.App}>
        {loading ? (
          <Loader />
        ) : (
          <Router history={history}>
            <Fragment>
              <div className={styles.wrapper}>
                <Menu user={user} />
                <div className={styles.body}>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/vacanci" component={Vacanci} />
                    <Route
                      path="/signin"
                      render={() =>
                        !user.firstName ? <SignIn /> : <Redirect to="/" />
                      }
                    />
                    <Route
                      path="/signup"
                      render={() =>
                        !user.firstName ? <SignUp /> : <Redirect to="/" />
                      }
                    />
                    <Route
                      path="/private"
                      render={() =>
                        user.firstName ? <Private /> : <Redirect to="/" />
                      }
                    />
                    <Route
                      path="/update/:id"
                      component={props => (
                        <UpdateSummary {...props} historys={history} />
                      )}
                    />
                    <Route path="/logOut" component={Home} />
                    <Route path="/summary-user/:id" component={SummaryList} />
                    <Route
                      path="/create-summary"
                      render={props =>
                        user.firstName ? (
                          <CreateSummary {...props} historys={history} />
                        ) : (
                          <Redirect to="/" />
                        )
                      }
                    />
                  </Switch>
                </div>
              </div>
            </Fragment>
          </Router>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  authord: state.auth.authord,
  loading: state.auth.loading
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

App.propTypes = {
  user: propTypes.object,
  actions: propTypes.object.isRequired,
  loading: propTypes.bool
};

App.defaultProps = {
  user: {},
  loading: true
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
