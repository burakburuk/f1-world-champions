import React, {Component} from 'react';
import ListHeader from '../components/Champions/ListHeader';
import ChampionList from '../components/Champions/ChampionList';

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
