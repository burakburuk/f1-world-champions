import React from 'react';
import PropTypes from 'prop-types';

import {
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
} from '../Table';
import StyledWorldChampionTable from './StyledWorldChampionTable';


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
