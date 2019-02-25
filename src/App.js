import React, { Component, Fragment } from 'react'
import { Route, Switch, Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import propTypes from 'prop-types'

import components from './page'
import Menu from './ui/organisms/Menu'

import Loader from './ui/atoms/Loader'

import QuestRoute from './helpers/QuestRoute'
import AuthRoute from './helpers/AuthRoute'
import Loadash from './helpers/Loadash'

import styles from './index.css'
import history from './helpers/history'

import * as actions from './redux/auth/actions'

const { Home, SignIn, SignUp, Private, SummaryList, CreateSummary, Vacanci, UpdateSummary } = components
  
class App extends Component {
  
  componentDidMount() {
    const { user } = this.props
    if(user) {
      this.props.actions.getUser() 
    }  
  }

  render() {
    const { user, authord, loading } = this.props
    return (
      <div className = { styles.App }>
        {
          loading
          ? <Loader />
          : <Router history = { history }> 
          <Fragment>
            <div className = { styles.wrapper }>
              <Menu user = { user } />
              <div className = { styles.body }> 
                <Switch>
                  <Route exact path = '/'  component = { Home }/>
                  <Route path = '/vacanci'  component = { Vacanci }/>
                  <AuthRoute user = { Loadash(user) } path = '/signin'  component = { () => <SignIn /> } />                                                                                                                                                                                                                                                                                                                                                                                                                                  
                  <QuestRoute authord = { !authord } path='/signup' component = { () => <SignUp /> } />
                  <AuthRoute user = { !Loadash(user) } path='/private' component = { Private }/>
                  <AuthRoute user = { !Loadash(user) } path='/update/:id' component = { (props) => <UpdateSummary {...props} historys = { history }/> }/>
                  <AuthRoute path='/logOut' component = { Home }/>
                  <Route path='/summary-user/:id' component = { SummaryList }/>
                  <AuthRoute user = { !Loadash(user) } path='/create-summary' component = { () => <CreateSummary historys = { history }/> }/>
                </Switch>
              </div>
            </div>
          </Fragment>
        </Router>
        }
    </div>
    )
  }
}

const  mapStateToProps  = state => ({
  user:    state.auth.user,
  authord: state.auth.authord,
  loading: state.auth.loading,
})

const  mapDispatchToProps  = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

App.propTypes = {
  user:    propTypes.object,
  actions: propTypes.object.isRequired,
  authord: propTypes.bool,
  loading: propTypes.bool
}

App.defaultProps = {
  user:    {},
  authord: false,
  loading: true
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
