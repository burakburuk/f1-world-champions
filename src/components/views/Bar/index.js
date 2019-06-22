import React, { Component } from 'react';
import logo from '../../../assets/img/f1_logo_white.svg';
import '../../../index.css';

class Bar extends Component {
    render() {
        return (
            <div className="app-bar">
                <img alt="no_logo" src={logo}/>
            </div>
        );
    }
}

export default Bar;
