import React from 'react';
import PropTypes from 'prop-types';

const TableBody = props => (
    <tbody>
        {props.children}
    </tbody>
);

TableBody.propTypes = {
    children: PropTypes.array,
};

export default TableBody;
