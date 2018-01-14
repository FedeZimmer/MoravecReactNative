import Config from 'react-native-config';

export class ApiClient {
    domain() {
        return Config.API_URL;
    }

    apiCall(method, url, body, callback) {
        const headers = {'Accept': 'application/json', 'Content-Type': 'application/json'};
        const options = {method: method, dataType: 'json', headers: headers};

        if(method !== 'GET') {
            Object.assign(options, {body: JSON.stringify(body)});
        }

        fetch(this.domain() + url, options).then((response) => {
            response.json().then(callback).done();
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