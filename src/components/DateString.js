import * as React from 'react';

const DateString = ({timestamp}) => {
  if (!timestamp) {
    return null;
  }

  const date = new Date(timestamp);
  return <span style={{ color: '#aaa' }}>{date.toLocaleString()}</span>
}

export default DateString;