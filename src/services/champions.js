import Routes from '../constants/routes';
import callApi from './callApi';

export const fetchAllChampions = pagination => callApi('.json', pagination);

export const fetchChampionByYear = (year) => {
    if (!year) {
        throw new Error('Year parameter must be specified!');
    }
    return callApi(Routes.fetchChampionByYear.replace('{year}', year));
};

export const fetchAllChampionsByYear = year => (
    callApi(Routes.fetchAllChampionsByYear.replace('{year}', year))
);
