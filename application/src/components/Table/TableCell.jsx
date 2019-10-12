import React from 'react';
import PropTypes from 'prop-types';
import StyledTableCell from './StyledTableCell';

const TableCell = (props) => {
    const width = props.width ? `${props.width}px` : 'auto';
    return (
        <StyledTableCell
            align={props.align}
            textColor={props.textColor}
            width={width}>
            {props.children}
        </StyledTableCell>
    );
};

TableCell.propTypes = {
    children: PropTypes.any,
    align: PropTypes.string,
    textColor: PropTypes.string,
    width: PropTypes.number,
};

export default TableCell;
