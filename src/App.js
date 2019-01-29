import React, { Component, Fragment } from 'react'
import { Route, Switch, Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import propTypes from 'prop-types'

import components from './page'
import Menu from './ui/organisms/Menu'
import Search from './ui/organisms/Search'

import PrivateRoute from './helpers/PrivateRoute'
import QuestRoute from './helpers/QuestRoute'

import styles from './index.css'

import * as actions from './redux/auth/actions'

const history = createBrowserHistory()

const { Home, SignIn, SignUp, Private } = components

class App extends Component {

  componentDidUpdate() {  
    const { token } = this.props
    if(token !== null) {  
      history.push('/') 
    }  
  }

  componentDidMount() {
    const { token } = this.props
    this.props.actions.getToken()   
    if(token) {
      this.props.actions.getUser() 
    }  
  }

  render() {
    const { token, userList, authord, loadToken } = this.props
    console.log(loadToken)
    return (
      <div className = { styles.App }>
        <Router history = { history }> 
          <Fragment>
            <Search />
            <Menu token = { token } userList = { userList }/>
            <Switch>
                <Route exact path = '/'  component = { Home }/>
                <Route path = '/signin'  component = { () => <SignIn /> } />                                                                                                                                                                                                                                                                                                                                                                                                                                  
                <QuestRoute authord = { !authord }  path='/signup' component = { () => <SignUp /> } />
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
  authord: state.auth.authord
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
