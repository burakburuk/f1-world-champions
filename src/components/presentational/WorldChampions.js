import React from 'react';
import ListHeader from './ListHeader';
import ChampionList from '../container/ChampionList';

const WorldChampions = (props) => {
    return (
        <div>
            <ListHeader></ListHeader>
            <ChampionList></ChampionList>
        </div>
    );
};

export default WorldChampions;
