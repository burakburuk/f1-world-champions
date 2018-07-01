const API_ROOT = 'http://ergast.com/api/f1';

// Fetches an API response and returns a promise
function callApi(endpoint, pagination) {
    let fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;

    return fetch(fullUrl)
        .then(response =>
            response.json().then(json => ({ json, response }))
        ).then(({ json, response }) => {
            if (!response.ok) {
                return Promise.reject(json)
            }

            return json;
        })
        .then(
            response => ({response}),
            error => ({error: error.message || 'Something bad happened'})
        )
}

// api services
export const fetchAllChampions = (pagination) => callApi(`.json`,pagination);
export const fetchChampionByYear = (year) => {
    if(!year){
        throw new Error("Year parameter must be specified!");
    }
    return callApi('/' + year + '/results.json?limit=1000&offset=0');
};

export const fetchAllChampionsByYear = (year) => callApi('/' + year + '/results/1.json');