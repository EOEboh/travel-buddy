import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header style={headerStyle}>
            <h1>My Todo List</h1>
            <Link className="myLink" to="/">Home</Link> | <Link className="myLink" to="/about">About</Link>
        </header>
    ) 
}

const headerStyle ={
    background: '#333',
    color: '#fff',
    borderRadius: '5px',
    padding: '10px'
}

export default Header;