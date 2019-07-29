import React from 'react';
import PropTypes from 'prop-types';

const TableRow = props => (
    <tr>
        {props.children}
    </tr>
);

TableRow.propTypes = {
    children: PropTypes.array,
};

export default TableRow;
