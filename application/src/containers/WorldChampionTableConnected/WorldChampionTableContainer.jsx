import React, { Component } from 'react';
import PropTypes from 'prop-types';
import objectAssing from 'object-assign';
import WorldChampionItem from '../../components/WorldChampionItem';
import WorldChampionTable from '../../components/WorldChampionTable';
import { worldChampionsUtil } from '../../utils';

class WorldChampionTableContainer extends Component {
    componentDidMount() {
        this.props.requestNumberOfChampions();
        this.props.requestAllChampions(2005, 2015);
    }

    render() {
        const { champions } = this.props;
        const championListByYear = this.createChampionListByYears(champions);
        const allChampions = this.getChampionListFromMap(championListByYear);

        return (
            <WorldChampionTable champions={allChampions} />
        );
    }

    createChampionListByYears = (champions) => {
        const championList = objectAssing(champions.list);
        for (let i = champions.endYear; i >= champions.startYear; i--) {
            if (championList.get(i) === undefined) {
                championList.set(i, null);
            }
        }
        return championList;
    };

    getChampionListFromMap = (championsMap) => {
        const championList = [];
        championsMap.forEach((champion, index) => {
            let championToBeAddedToList = <WorldChampionItem key={`ChampionItem-${index}`}/>;

            if (champion !== null) {
                const championByYear = worldChampionsUtil.getChampionViewModel(champion);

                championToBeAddedToList = (
                    <WorldChampionItem
                        key={championByYear.key}
                        name={championByYear.driverName}
                        year={championByYear.season}
                        nationality={championByYear.nationality}
                        company={championByYear.team}
                        points={championByYear.points}
                        driverId={championByYear.driverId}
                        carImage={championByYear.carImage}
                        openChampionsByYearPopup={this.props.openChampionsByYearPopup} >
                    </WorldChampionItem>
                );
            }

            championList.push(championToBeAddedToList);
        });
        return championList;
    }
}

WorldChampionTableContainer.propTypes = {
    champions: PropTypes.object.isRequired,
    requestAllChampions: PropTypes.func.isRequired,
    requestNumberOfChampions: PropTypes.func,
    openChampionsByYearPopup: PropTypes.func,
};

export default WorldChampionTableContainer;