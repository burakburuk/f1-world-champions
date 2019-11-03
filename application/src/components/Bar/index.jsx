import React from 'react';

import logo from '../../../assets/img/logo.svg';
import StyledBar from './StyledBar';

const Bar = () => (
    <StyledBar>
        <span dangerouslySetInnerHTML={{ __html: logo }} />
    </StyledBar>
);

export default Bar;
