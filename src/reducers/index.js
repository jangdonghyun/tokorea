import { combineReducers } from 'redux';
import memo, { MemoState } from './memo'

const rootReducer = combineReducers({
  memo,
})

export default rootReducer