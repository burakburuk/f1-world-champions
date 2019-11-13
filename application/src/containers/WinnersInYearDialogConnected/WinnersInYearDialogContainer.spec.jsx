import React from 'react';
import WinnersInYearDialogContainer from './WinnersInYearDialogContainer';
import WinnersInYearDialog from '../../components/WinnersInYearDialog';
import { shallow } from 'enzyme';

describe('Given WinnersInYearDialogContainer', () => {

    let wrapper = null;

    const open = true;
    const selectedYear = 2013;
    const onClose = jest.fn();
    const requestNumberOfChampionsInSeason = jest.fn();

    beforeEach(() => {
        onClose.mockClear();
        requestNumberOfChampionsInSeason.mockClear();

        wrapper = shallow(
            <WinnersInYearDialogContainer
                open={open}
                selectedYear={selectedYear}
                onClose={onClose}
                requestNumberOfChampionsInSeason={requestNumberOfChampionsInSeason}
            />,
        );
    });

    

   describe('when it is rendering', () => {
        it('should have "open" property to be defined', () => {
            expect(wrapper.find(WinnersInYearDialog).props().open).toBe(open);
        });
        it('should have "selectedYear" property to be defined', () => {
            expect(wrapper.find(WinnersInYearDialog).props().selectedYear).toBe(selectedYear);
        });
        it('should make a request for number of winners in a season', () => {
            expect(requestNumberOfChampionsInSeason).toHaveBeenCalledTimes(1);
        });
   });

    describe('when dialog get closed', () => {
        it('should call onClose from the container', () => {
            wrapper.find(WinnersInYearDialog).props().onClose();
            expect(onClose).toHaveBeenCalledTimes(1);
        });
    });
});