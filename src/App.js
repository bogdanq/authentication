import React, { Component, Fragment } from 'react'
import { Route, Switch, Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import components from './ui'
import PrivateRoute from './helpers/authRout/PrivateRoute'
import styles from './index.css'
import * as actions from './redux/auth/actions'
console.log(styles)
const history = createBrowserHistory()

const { Menu, Home, SignIn, SignUp, Private } = components

class App extends Component {

  componentDidUpdate() {  
    this.props.authord && history.push('/signin')
    this.props.token && history.push('/')
  }

  render() {
    const { actions, token } = this.props
    return (
      <div className="App">
      <h1 className = { styles.title }>FFFF</h1>
        <Router history = { history }> 
          <Fragment>
            <Menu token = { token } actions = { actions }/>
            <Switch>
                <Route exact path = '/'  component = { Home }/>
                <Route path = '/signin'  component = { () => <SignIn actions = { actions }/> } />                                                                                                                                                                                                                                                                                                                                                                                                                                     
                <Route path = '/signup'  component = { () => <SignUp actions = { actions }/>  } />  
                <PrivateRoute token={token} path='/private' component={Private} />
            </Switch>
          </Fragment>
        </Router>
      </div>
    )
  }
}

const  mapStateToProps  = state => ({
  token: state.auth.token,
  authord: state.auth.authord
})

const  mapDispatchToProps  = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
