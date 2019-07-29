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

const StyledWorldChampionTable = styled.div`
    width: 100%;
    padding-top: 10px;
    padding-left: 30px;
    padding-right: 30px;

    td {
        border-bottom: 1px solid #9e9e9e;
        height: 50px;
    }
`;

const WorldChampionTable = props => (
    <StyledWorldChampionTable>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Year</TableCell>
                    <TableCell>Driver</TableCell>
                    <TableCell>Nationality</TableCell>
                    <TableCell>Team</TableCell>
                    <TableCell>Points</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.champions}
            </TableBody>
        </Table>
    </StyledWorldChampionTable>
);

WorldChampionTable.propTypes = {
    champions: PropTypes.array,
};

export default WorldChampionTable;
