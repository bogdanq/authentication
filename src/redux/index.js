import { combineReducers } from 'redux'

import { reducer as auth } from "./auth"
import { reducer as summary } from "./summary"

export default combineReducers({ auth, summary })