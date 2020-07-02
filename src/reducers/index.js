import { combineReducers } from 'redux'

import userReducer from './userReducer'
import cardListReducer from './cardListReducer'

export default combineReducers({
  user: userReducer,
  cardList: cardListReducer,
})
