let store = [
  { id: 2, content: '두번째 메모입니다.', createdAt: Date.now() },
  { id: 1, content: '첫번재 메모입니다.', createdAt: Date.now() - 1 },
]

export const fetchMemoList = () => 
  store.filter(memo => !memo.deleted)
    .sort((a, b) => b.createdAt - a.createdAt);

export const fetchDeletedMemoList = () => 
  store.filter(memo => !!memo.deleted)
    .sort((a, b) => b.createdAt - a.createdAt);

export const fetchMemo = (memoId) => 
  store.find(m => m.id === memoId);

export const addMemo = (memo) => {
  const lastMemo = store.sort((a, b) => b.id - a.id)[0];
  memo.id = lastMemo ? lastMemo.id + 1 : 1;
  memo.createdAt = Date.now();
  store = [ memo, ...store ];
  return memo;
}

export const deleteMemo = (memoId) => {
  store = store.map(memo => ({
    ...memo,
    deleted: memo.id === memoId ? true: memo.deleted,
  }));
}

export const resotreMemo = (memoId) => {
  store = store.map(memo => ({
    ...memo,
    deleted: memo.id === memoId ? false : memo.deleted,
  }));
}