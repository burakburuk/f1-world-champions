import React, { PureComponent } from 'react';
import Skeleton from 'react-loading-skeleton';
import PropTypes from 'prop-types';
import Button from './Button';
import { TableRow, TableCell } from './Table';

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
                    <div className="ch-item item-year">
                        {year || <Skeleton />}
                    </div>
                </TableCell>
                <TableCell>
                    {name || <Skeleton />}
                </TableCell>
                <TableCell>
                    {nationality || <Skeleton />}
                </TableCell>
                <TableCell>
                    <div className="ch-item">
                        {company ? <div className="item-company">{company}</div> : <Skeleton />}
                        {company && <img className="item-image" alt="no_image" src={carImage}/>}
                    </div>
                </TableCell>
                <TableCell width={52}>
                    {points || <Skeleton />}
                </TableCell>
                <TableCell width={132}>
                    <Button
                        primary={!!name}
                        className="show-details"
                        onClick={this.handleOpenChampionsByYearPopup}>
                        Show details
                    </Button>
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
