import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import cookies from 'browser-cookies'
import reducers from '../redux'

const customMiddleWare = ({ dispatch }) => next => action => {
  
  if(action.promise) {
    action.promise
      .then(res =>  {
        dispatch({ type: `${action.type}_SUCCESS`,  payload: res.data }) 
        res.data.token && cookies.set('token', String(res.data.token))
      })
      .catch(rej => {
        dispatch({ type: `${action.type}_ERROR` })
      })
  }
  next(action)
}


export default createStore(
  reducers,
  applyMiddleware(logger, thunk, customMiddleWare)
)