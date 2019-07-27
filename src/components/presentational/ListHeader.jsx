import React from 'react';

const ListHeader = () => {
    return (
        <tr>
            <th className="header-year">
                Year
            </th>
            <th>
                Driver
            </th>
            <th>
                Nationality
            </th>
            <th>
                Team
            </th>
            <th className="header-points">
                Points
            </th>
            <th className="header-show-all-champions"></th>
        </tr>
    );
};

export default ListHeader;
