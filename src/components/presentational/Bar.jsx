import '../../index.scss';

import React, { Component } from 'react';
import logo from '../../assets/img/logo.svg';

class Bar extends Component {
    render() {
        return (
            <div className="app-bar">
                <span dangerouslySetInnerHTML={{__html: logo}} />
            </div>
        );
    }
}

export default Bar;
