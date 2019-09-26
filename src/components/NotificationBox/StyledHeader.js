import styled from 'styled-components';

const StyledHeader = styled.div`

    .close {
        float: right;
        font-size: 22px;
        font-weight: bold;
        width: 20px;
        height: 20px;
        background: red;
        color: #FFBABA;
        text-align: center;
        line-height: 22px;
        margin-right: -22px;
        margin-top: -5px;
    }

    .close:hover,
    .close:focus {
        text-decoration: none;
        cursor: pointer;
    }
`;

export default StyledHeader;
