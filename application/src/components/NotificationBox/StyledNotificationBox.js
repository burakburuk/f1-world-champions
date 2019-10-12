import styled from 'styled-components';

const StyledNotificationBox = styled.div`
    position: fixed; /* Stay in place */
    z-index: 2; /* Sit on top */
    right: 10px;
    bottom: 10px;
    min-height: 50px;
    overflow: hidden;
    color: #D8000C;
    background-color: #FFBABA;
    padding: 12px 30px;
    display: ${props => (props.open ? 'block' : 'none')};
`;

export default StyledNotificationBox;
