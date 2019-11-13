import React from 'react';
import { shallow } from 'enzyme';
import WinnerTableInYearContainer from './WinnerTableInYearContainer';
import winnersInSeasonUtil from '../../utils/winnersInSeasonUtil';
import WinnerTableInYear from '../../components/WinnerTableInYear';

jest.mock('../../utils/winnersInSeasonUtil');

describe('Given WinnerTableInYearContainer', () => {
    let wrapper = null;

    const mockGetViewModel = winnersInSeasonUtil.getViewModel;

    const listByYear = [];
    const count = 0;
    const selectedDriverId = '123';

    beforeEach(() => {
        mockGetViewModel.mockClear();

        wrapper = shallow(
            <WinnerTableInYearContainer
                listByYear={listByYear}
                count={count}
                selectedDriverId={selectedDriverId}
            />,
        );
    });

    describe('when rendering with empty list', () => {
        it('should have a WinnerTableInYear with winners defined', () => {
            const winners = wrapper.find(WinnerTableInYear).props().winners;
            expect(winners).toEqual([]); 
        });
    });

    describe('when count is 0', () => {
        it('should not call get view model from utils', () => {
            wrapper.setProps({ count: 0 });
            expect(mockGetViewModel).not.toHaveBeenCalled();     
        });
    });

    describe('when count is greater than 0', () => {
        it('should call get view model from utils', () => {
            wrapper.setProps({ count: 1 });
            expect(mockGetViewModel).toHaveBeenCalled();     
        });
    });

});