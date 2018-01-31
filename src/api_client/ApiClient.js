import Config from "react-native-config"

export class ApiClient {
    static baseUrl() {
        return Config.API_URL;
    }

    call(method = 'GET', url, body, callback) {
        const headers = {'Accept': 'application/json', 'Content-Type': 'application/json'};
        const fetchOptions = {method: method, headers: headers};

        if (method !== 'GET') {
            Object.assign(fetchOptions, {body: JSON.stringify(body)});
        }

        fetch(ApiClient.baseUrl() + url, fetchOptions).then((response) => {
            response.json().then(callback).done();
        }, (error) => {
            console.error('Ocurrió un error al conectar servidor ' + ApiClient.baseUrl());
        });
    }

    // Example POST
    /*
        const body = {username: username, password: password};
        const callback = null;
        this.apiCall('POST', '/login/', body, callback);
    */

    // Example GET
    /*
         const body = {};
         const callback = null;
         this.apiCall('GET', '/login/', body, callback);
     */
}