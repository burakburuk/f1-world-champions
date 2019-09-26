import React, { PureComponent } from 'react';
import Skeleton from 'react-loading-skeleton';
import PropTypes from 'prop-types';
import { TableRow, TableCell } from '../Table';

import {
    StyledYear,
    StyledTeam,
    StyledCompany,
    StyledImage,
    StyledButton,
} from './StyledWorldChampionTable';

class WorldChampionItem extends PureComponent {
    render() {
        const {
            name,
            year,
            nationality,
            company,
            points,
            carImage,
        } = this.props;

        return (
            <TableRow>
                <TableCell width={70}>
                    <StyledYear>
                        {year || <Skeleton />}
                    </StyledYear>
                </TableCell>
                <TableCell>
                    {name || <Skeleton />}
                </TableCell>
                <TableCell>
                    {nationality || <Skeleton />}
                </TableCell>
                <TableCell>
                    <StyledTeam>
                        {company ? <StyledCompany>{company}</StyledCompany> : <Skeleton />}
                        {company && <StyledImage alt="no_image" src={carImage}/>}
                    </StyledTeam>
                </TableCell>
                <TableCell width={52}>
                    {points || <Skeleton />}
                </TableCell>
                <TableCell width={140} align={'right'}>
                    <StyledButton
                        primary={!!name}
                        onClick={this.handleOpenChampionsByYearPopup}>
                        Show details
                    </StyledButton>
                </TableCell>
            </TableRow>
        );
    }

    handleOpenChampionsByYearPopup = () => {
        const { year, driverId } = this.props;
        if (year && driverId) {
            this.props.openChampionsByYearPopup(year, driverId);
        }
    }
}

WorldChampionItem.propTypes = {
    driverId: PropTypes.string,
    name: PropTypes.string,
    year: PropTypes.number,
    nationality: PropTypes.string,
    company: PropTypes.string,
    points: PropTypes.number,
    carImage: PropTypes.string,
    openChampionsByYearPopup: PropTypes.func,
};

export default WorldChampionItem;
