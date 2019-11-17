import * as React from 'react';

const style = {
  flex: 1,
  overflow: 'auto',
  border: 'solid 1px #ccc',
  borderRadius: '4px'
}

function Main(props) {
  return (
    <main style={style}>
      {props.children}
    </main>
  )
}

export default Main;