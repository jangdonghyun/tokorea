import * as React from 'react';
import { Link } from 'react-router-dom';

function Button(props) {
  const { to, children, primary, onClick } = props;
  const isLink = !!to;

  const renderButton = () => {
    return (
      <button 
        style={buttonStyle(!!primary)} 
        onClick={onClick}
      >{children}</button>
    )
  }

  const renderLink = () => {
    if (!to) {
      return <div></div>
    }

    return (
      <Link 
        style={{
          ...buttonStyle(!!primary),
          textDecoration: 'none',
        }} 
        to={to}
      >{children}</Link> 
    )
  }

  return isLink ? renderLink() : renderButton();
}

function buttonStyle (primary) {
  return {
    display: 'inline-block',
    border: 'solid 1px #ccc',
    borderColor: primary ? '#2e6da4' : '#ccc',
    borderRadius: '4px',
    margin: '0 10px 10px 0',
    padding: '8px 16px',
    width: 'auto',
    overflow: 'visible',
    background: primary ? '#337ab7' : 'transparent',
    color: primary ? '#fff' : 'inherit',
  }
}

export default Button;