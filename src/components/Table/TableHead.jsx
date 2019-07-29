import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTableHead = styled.thead`
    td {
        font-weight: bold;
    }
`;

const TableHead = props => (
    <StyledTableHead>
        {props.children}
    </StyledTableHead>
);

TableHead.propTypes = {
    children: PropTypes.object,
};

export default TableHead;
