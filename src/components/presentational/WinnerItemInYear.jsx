import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';

const WinnerItemInYear = (props) => {
    const {
        name,
        race,
        company,
        date,
        highlight,
    } = props;

    return (
        <tr>
            <td>
                <div className="item-race">
                    {race || <Skeleton/>}
                </div>
            </td>
            <td>
                <div className={highlight ? 'by-name-item-highlight' : 'by-driver'}>
                    {name || <Skeleton/>}
                </div>
            </td>
            <td>
                <div className="by-item by-year-item item-date">
                    {date || <Skeleton/>}
                </div>
            </td>
            <td>
                <div className="by-item by-year-item item-company">
                    {company || <Skeleton/>}
                </div>
            </td>
        </tr>
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
