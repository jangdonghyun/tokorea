import * as React from 'react';

const style = {
  display: 'flex',
  flex: 1,
  margin: '10px',
}

function Layout(props) {
  return (
    <>
    <div style={style}>
    {props.children}
    </div>
    </>
  )
}

export default Layout;