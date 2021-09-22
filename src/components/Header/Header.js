import React from 'react';
import '.Header.css'

const header = () => {
    return (
        <div>
            <nav className="menu">
            <a href="/home">Home</a>
            <a href="/countries">countries</a>
            <a href="/about">About us</a>
            </nav>
        </div>
    );
};

export default header;