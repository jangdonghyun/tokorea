import * as React from 'react';
import { Link } from 'react-router-dom';

const style = {
width: '200px',
border: 'solid 1px #ccc',
marginRight: '10px',
borderRadius: '4px',
}

function Sidebar(props) {
    return (
        <aside style={style}>
        {props.children}
        </aside>  
    )
}

export default Sidebar;

export function SidebarTitle({children}) {
    return (
        <h1 style={{
            padding: '0 10px',
        }}>
            {children}
        </h1>
    )
}

export function SidebarBackButton({to}) {
    return (
        <Link style={{
            textDecoration: 'none',
            fontSize: '24px',
            padding: '10px',
            display: 'block',
            }}
            to={to}
        >{`<`}</Link>
    )
}