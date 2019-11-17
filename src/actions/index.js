export const FETCH_MEMO_LIST = 'FETCH_MEMO_LIST'
export const FETCH_MEMO = 'FETCH_MEMO'
export const FETCH_DELETED_MEMO = 'FETCH_DELETED_MEMO'
export const FETCH_DELETED_MEMO_LIST = 'FETCH_DELETED_MEMO'
export const ADD_MEMO = 'ADD_MEMO'
export const DELETE_MEMO = 'DELETE_MEMO'
export const RESTORE_MEMO = 'RESTORE_MEMO'

export const fetchMemoList = (memos) => ({
  type: FETCH_MEMO_LIST,
  payload: memos
})

export const fetchMemo = (memo) => ({
  type: FETCH_MEMO,
  payload: memo
})

export const fetchDeletedMemo = (memo) => ({
  type: FETCH_DELETED_MEMO,
  payload: memo
})

export const fetchDeletedMemoList = (memos) => ({
  type: FETCH_DELETED_MEMO_LIST,
  payload: memos
})

export const addMemo = (memo) => ({
  type: ADD_MEMO,
  payload: memo
})
export const deleteMemo = (id) => ({
  type: DELETE_MEMO,
  payload: id
})


export const restoreMemo = (id) => ({
  type: RESTORE_MEMO,
  payload: id
})