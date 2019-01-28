import React, { Component, Fragment } from 'react'
import { Route, Switch, Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import propTypes from 'prop-types'

import components from './page'
import Menu from './ui/organisms/Menu'
import PrivateRoute from './helpers/PrivateRoute'
import QuestRoute from './helpers/QuestRoute'

import styles from './index.css'

import * as actions from './redux/auth/actions'

const history = createBrowserHistory()

const { Home, SignIn, SignUp, Private } = components

class App extends Component {

  componentDidUpdate() {  
    this.props.token && history.push('/')
  }

  componentDidMount() {
    const { token } = this.props
    this.props.actions.getToken()   
    if(token) {
      this.props.actions.getUser() 
    }  
  }

  render() {
    const { actions, token, userList, loadToken, authord } = this.props

    return (
      <div className = { styles.App }>
      { !loadToken &&  <h1>welcome {userList.firstName}</h1> }
        <Router history = { history }> 
          <Fragment>
            <Menu token = { token } actions = { actions }/>
            <Switch>
                <Route exact path = '/'  component = { Home }/>
                <Route path = '/signin'  component = { () => <SignIn actions = { actions } /> } />                                                                                                                                                                                                                                                                                                                                                                                                                                  
                <QuestRoute authord = { !authord }  path='/signup' component = { () => <SignUp actions = { actions } /> } />
                <PrivateRoute token = { token } path='/private' component={Private}/>
                <PrivateRoute token ={ token } path='/logOut' component={Private}/>
            </Switch>
          </Fragment>
        </Router>
      </div>
    )
  }
}

const  mapStateToProps  = state => ({
  token: state.auth.token,
  userList: state.auth.userList,
  loadToken: state.auth.loadToken,
  authord: state.auth.authord,
})

const  mapDispatchToProps  = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

App.propTypes = {
  userList: propTypes.object,
  token: propTypes.number,
  actions: propTypes.object.isRequired,
  authord: propTypes.bool
}

App.defaultProps = {
  userList: {},
  token: null,
  authord: false
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
