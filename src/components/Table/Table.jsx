import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTableWrapper = styled.div`
    width: 100%;

    table {
        border-spacing: 0;
        width: 100%;
    }
`;

const Table = props => (
    <StyledTableWrapper>
        <table>
            {props.children}
        </table>
    </StyledTableWrapper>
);

Table.propTypes = {
    children: PropTypes.array,
};

export default Table;
