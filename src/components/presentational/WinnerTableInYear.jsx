import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
} from './Table';

const StyledWinnerTableInYear = styled.div`
    width: 100%;
    padding-top: 10px;
    padding-left: 30px;
    padding-right: 30px;

    td {
        border-bottom: 1px solid #9e9e9e;
        height: 50px;
    }
`;

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
