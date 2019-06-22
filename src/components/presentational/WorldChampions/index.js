import React, {Component} from 'react';
import ListHeader from '../ListHeader';
import ChampionList from '../../container/ChampionList';

class WorldChampions extends Component {
    render() {
        return (
            <div>
                <ListHeader></ListHeader>
                <ChampionList></ChampionList>
            </div>
        );
    }
}

export default WorldChampions;
