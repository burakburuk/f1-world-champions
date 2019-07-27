import React from 'react';
import ListHeader from './ListHeader';
import ChampionList from '../container/ChampionList';

const WorldChampions = () => {
    return (
        <div className={'world-champions'}>
            <table>
                <tbody>
                    <ListHeader></ListHeader>
                    <ChampionList></ChampionList>
                </tbody>
            </table>
        </div>
    );
};

export default WorldChampions;
