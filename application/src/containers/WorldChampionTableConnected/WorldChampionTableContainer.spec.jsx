import React from 'react';
import { shallow } from 'enzyme';
import WorldChampionTableContainer from './WorldChampionTableContainer';

describe('Given WorldChampionTableContainer', () => {
    let wrapper = null;

    const champions = {
        list: []
    };
    const requestAllChampions = jest.fn();
    const requestNumberOfChampions = jest.fn();
    const openChampionsByYearPopup = jest.fn();

    beforeEach(() => {
        requestAllChampions.mockClear();
        requestNumberOfChampions.mockClear();
        openChampionsByYearPopup.mockClear();

        wrapper = shallow(
            <WorldChampionTableContainer
                champions={champions}
                requestAllChampions={requestAllChampions}
                requestNumberOfChampions={requestNumberOfChampions}
                openChampionsByYearPopup={openChampionsByYearPopup}
            />,
        );
    });

    describe('when rendering', () => {
        it('should make a request for number of champions', () => {
            expect(requestNumberOfChampions).toHaveBeenCalled();
        });
        it('should make a request for all world champions', () => {
            expect(requestAllChampions).toHaveBeenCalledWith(2005, 2015);
        });
    });

});