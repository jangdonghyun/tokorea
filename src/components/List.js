  
import * as React from "react";

export function List({ children }) {
    return (
    <ul
        style={{
        listStyle: 'none',
        paddingLeft: '0',
        }}>
        { children }
    </ul>
    )
} 

export function ListItem(props) {
  const { children, first } = props;

  return (
    <li
      style={{
        padding: '15px',
        borderBottom: '1px solid #ddd',
        borderTop: first ? '1px solid #ddd' : 'none',
      }}
    >
      {children}
    </li>

  )
}