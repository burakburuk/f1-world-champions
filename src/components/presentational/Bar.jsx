import '../../index.scss';

import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/img/logo.svg';

const StyledBar = styled.div`
    width: 100%;
    height: 80px;
    background: #e00;
    color: white;
    vertical-align: middle;

    svg {
        width: 120px;
        margin-left: 18px;
        margin-top: 25px;
    }
`;

const Bar = () => (
    <StyledBar>
        <span dangerouslySetInnerHTML={{ __html: logo }} />
    </StyledBar>
);

export default Bar;
