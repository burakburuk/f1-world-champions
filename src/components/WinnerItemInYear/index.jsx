import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { TableRow, TableCell } from '../Table';

const WinnerItemInYear = (props) => {
    const {
        name,
        race,
        company,
        date,
        highlight,
    } = props;

    return (
        <TableRow>
            <TableCell>
                {race || <Skeleton/>}
            </TableCell>
            <TableCell textColor={highlight ? '#ec7373' : '#000000'}>
                {name || <Skeleton/>}
            </TableCell>
            <TableCell>
                {date || <Skeleton/>}
            </TableCell>
            <TableCell>
                {company || <Skeleton/>}
            </TableCell>
        </TableRow>
    );
};

WinnerItemInYear.propTypes = {
    name: PropTypes.string,
    race: PropTypes.string,
    company: PropTypes.string,
    date: PropTypes.string,
    highlight: PropTypes.bool,
};

export default WinnerItemInYear;
