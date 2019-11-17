import {MemoActionTypes} from '../actions'
import {
    FETCH_MEMO_LIST,
    FETCH_MEMO,
    FETCH_DELETED_MEMO,
    FETCH_DELETED_MEMO_LIST,
    ADD_MEMO,
    DELETE_MEMO,
    RESTORE_MEMO,   
  } from '../actions'

const initialState = {
    memos: [],
    deletedMemos: [],
}

function memoReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MEMO_LIST: 
      return {
        ...state,
        memos: action.payload
      }
    case FETCH_DELETED_MEMO_LIST:
      return {
        ...state,
        deletedMemos: action.payload
      }
    case FETCH_MEMO:
      return {
        ...state,
        memos: state.memos.map(memo => {
          if (memo.id !== action.payload.id) return memo
          return { ...action.payload }
        })
      }
    case FETCH_DELETED_MEMO:
      return {
        ...state,
        deletedMemos: state.deletedMemos.map(memo => {
          if (memo.id !== action.payload.id) return memo
          return { ...action.payload }
        })
      }
    case ADD_MEMO:
      return {
        ...state,
        memos: [action.payload, ...state.memos]
      }
    case DELETE_MEMO:
      if (!action.payload) return state;
      return {
        ...state,
        memos: state.memos.filter(memo => {
          return memo.id !== action.payload
        })
      }
    case RESTORE_MEMO:
      if (!action.payload) return state;
      return {
        ...state,
        deletedMemos: state.deletedMemos.filter(memo => {
          return memo.id !== action.payload
        })
      }
    default: 
      return state
  }
}

export default memoReducer