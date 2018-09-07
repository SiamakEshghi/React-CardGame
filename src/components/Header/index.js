import React from 'react';
import logo from 'img/logo.png';
import 'components/Header/style.css';

export default () => {
    return (
        <div className="header">
            <img className="logo" src={logo}/>
            <h2>CARD GAME</h2>
            <h5>React App</h5>
        </div>
    );
}