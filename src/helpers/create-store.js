import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import reducers from '../redux'

export default createStore(
  reducers,
  applyMiddleware(logger, thunk)
)