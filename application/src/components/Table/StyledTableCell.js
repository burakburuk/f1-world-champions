import styled from 'styled-components';

const StyledTableCell = styled.td`
    text-align: ${props => (props.align || 'left')};
    color: ${props => (props.textColor || 'black')};
    width: ${props => (props.width)};
`;

export default StyledTableCell;
