import * as React from 'react';
import Button from '../../components/Button';
import DateString from '../../components/DateString';

function MemoPage(props) {
  const { memo, onDeleteMemo } = props;
  console.log("memoPage");

  if (!memo) return null;
  return (
    <>
      <Button onClick={() => onDeleteMemo(memo.id)}>삭제</Button>
      <div style={{
        borderTop: '1px solid #ddd',
        paddingTop: '10px',
      }}>
        <div style={{
          marginBottom: '15px',
        }}>{memo.createdAt && <DateString timestamp={memo.createdAt} />}</div>
        <div style={{

        }}>{memo.content}</div>
      </div>
    </>
  );
}


export default MemoPage;