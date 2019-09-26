
import styled from 'styled-components';

const StyledButton = styled.button`
    border: none;
    padding: 10px 20px;
    text-align: center;
    cursor: pointer;
    color: ${props => (props.primary ? '#51a4de' : '#ffffff')};
    border-width: 1px;
    border-style: solid;
    border-color: ${props => (props.primary ? '#51a4de' : '#ece9e9')};
    background-color: ${props => (props.primary ? '#ffffff' : '#ece9e9')};

    &:hover {
        background-color: ${props => (props.primary ? '#3e82b1' : '')};
        color: #ffffff;
    }
`;

export default StyledButton;
