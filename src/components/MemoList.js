import React from 'react';

function MemoList(props) {
  const { memos } = props;
  
  return (
    <div>{memos}</div>
  );
}

export default MemoList;