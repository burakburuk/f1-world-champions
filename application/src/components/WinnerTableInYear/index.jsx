import React from 'react';
import PropTypes from 'prop-types';

import {
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
} from '../Table';
import StyledWinnerTableInYear from './StyledWinnerTableInYear';

const WinnerTableInYear = props => (
    <StyledWinnerTableInYear>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Race</TableCell>
                    <TableCell>Driver</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Team</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.winners}
            </TableBody>
        </Table>
    </StyledWinnerTableInYear>
);

WinnerTableInYear.propTypes = {
    winners: PropTypes.array,
};

export default WinnerTableInYear;
