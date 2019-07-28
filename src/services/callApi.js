const API_ROOT = 'http://ergast.com/api/f1';

// Fetches an API response and returns a promise
export default function callApi(endpoint) {
    const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;

    return fetch(fullUrl)
        .then(response => response.json().then(json => ({ json, response }))).then(({ json, response }) => {
            if (!response.ok) {
                return Promise.reject(json);
            }

            return json;
        })
        .then(
            response => ({ response }),
            error => ({ error: error.message || 'Error occured while requesting from the server!' }),
        );
}
