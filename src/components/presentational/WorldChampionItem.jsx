import React, { PureComponent } from 'react';
import Skeleton from 'react-loading-skeleton';
import PropTypes from 'prop-types';
import Button from './Button';

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
            <tr>
                <td>
                    <div className="ch-item item-year">
                        {year || <Skeleton />}
                    </div>
                </td>
                <td>
                    <div className="ch-item item-driver">
                        {name || <Skeleton />}
                    </div>
                </td>
                <td>
                    <div className="ch-item">
                        {nationality || <Skeleton />}
                    </div>
                </td>
                <td>
                    <div className="ch-item">
                        {company ? <div className="item-company">{company}</div> : <Skeleton />}
                        {company && <img className="item-image" alt="no_image" src={carImage}/>}
                    </div>
                </td>
                <td>
                    <div className="ch-item item-points">
                        {points || <Skeleton />}
                    </div>
                </td>
                <td>
                    <div className="ch-item">
                        <Button
                            color={name ? 'primary' : 'disabled'}
                            className="show-details"
                            onClick={this.handleOpenChampionsByYearPopup}>
                            Show details
                        </Button>
                    </div>
                </td>
            </tr>
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
