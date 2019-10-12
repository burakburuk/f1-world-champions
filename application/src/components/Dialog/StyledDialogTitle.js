import styled from 'styled-components';

const StyledDialogTitle = styled.div`
    padding: 2px 16px;

    .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }

    .close:hover,
    .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
`;

export default StyledDialogTitle;
