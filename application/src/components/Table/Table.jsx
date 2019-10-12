import React from 'react';
import PropTypes from 'prop-types';
import StyledTable from './StyledTable';

const Table = props => (
    <StyledTable>
        <table>
            {props.children}
        </table>
    </StyledTable>
);

Table.propTypes = {
    children: PropTypes.array,
};

export default Table;
