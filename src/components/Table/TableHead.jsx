import React from 'react';
import PropTypes from 'prop-types';
import StyledTableHead from './StyledTableHead';

const TableHead = props => (
    <StyledTableHead>
        {props.children}
    </StyledTableHead>
);

TableHead.propTypes = {
    children: PropTypes.object,
};

export default TableHead;
