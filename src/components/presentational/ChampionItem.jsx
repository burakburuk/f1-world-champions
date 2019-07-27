import React, {PureComponent} from 'react';
import Skeleton from 'react-loading-skeleton';

class ChampionItem extends PureComponent {
    render() {
        const {
            name, year, driverId,
            nationality, company, points, carImage
        } = this.props;

        if (!driverId) {
            return this.getSkeleton();
        }

        return (
            <tr>
                <td>
                    <div className="item-year">
                        {year}
                    </div>
                </td>
                <td>
                    <div className="ch-item item-driver">
                        {name}
                    </div>
                </td>
                <td>
                    <div className="ch-item">
                        {nationality}
                    </div>
                </td>
                <td>
                    <div className="ch-item">
                        <div className="item-company">{company}</div>
                        <img className="item-image" alt="no_image" src={carImage}/>
                    </div>
                </td>
                <td>
                    <div className="ch-item item-points">
                        {points}
                    </div>
                </td>
                <td>
                    <a onClick={this.handleOpenChampionsByYearPopup} className="item-show-all-champions">Show All Champions</a>
                </td>
            </tr>
        );
    }

    handleOpenChampionsByYearPopup = () => {
        const {year, driverId} = this.props;
        this.props.openChampionsByYearPopup(year, driverId);
    }

    getSkeleton() {
        return (
            <tr>
                <td colSpan={6}>
                    <Skeleton height={50} />
                </td>
            </tr>
        );
    }
}

export default ChampionItem;
