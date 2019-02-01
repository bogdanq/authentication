import { combineReducers } from 'redux'

import { reducer as auth } from "./auth"
import { reducer as summary } from "./summary"
import { reducer as user } from "./user"

export default combineReducers({ auth, summary, user })