import styled from 'styled-components';

const StyledDialogContent = styled.div`
    background-color: #fefefe;
    margin: 5% auto;
    padding: 20px;
    border: 1px solid #888;
    width: ${props => (props.width || '100%')};
`;

export default StyledDialogContent;
