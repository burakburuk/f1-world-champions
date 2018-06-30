const API_ROOT = 'http://ergast.com/api/f1';

// Fetches an API response and returns a promise
function callApi(endpoint,pagination) {
    let fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;

    if(pagination){
        fullUrl = paginationBuilder(fullUrl, pagination);
    }

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

// add pagination to url
function paginationBuilder(url, pagination) {
    if(pagination){
        url += "?";
        url += pagination.limit ? "limit=" + pagination.limit + "&" : "";
        url += pagination.offset ? "offset=" + pagination.offset : "";
    }
    return url;
}

// api services
export const fetchAllChampions = (pagination) => callApi(`.json`,pagination);