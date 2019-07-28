import '../../index.scss';

import React from 'react';
import logo from '../../assets/img/logo.svg';

const Bar = () => (
    <div className="app-bar">
        <span dangerouslySetInnerHTML={{ __html: logo }} />
    </div>
);

export default Bar;
