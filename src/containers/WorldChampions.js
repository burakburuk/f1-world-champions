import React, {Component} from 'react';
import ListHeader from '../components/WorldChampions/ListHeader';
import ChampionList from '../components/WorldChampions/ChampionList';

class Bar extends Component {
    render() {
        return (
            <div>
                <ListHeader></ListHeader>
                <ChampionList></ChampionList>
            </div>
        );
    }
}

export default Bar;
