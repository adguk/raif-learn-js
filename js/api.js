export class RequestTemplate {
    constructor(param) {
        console.log('RequestTemplate.constructor was called with parameter: ', param);
    }

    get(url, callbackFunction) {
        fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log('Result of request in RequestTemplate.get:\n', json);
            return json;
        })
        .then(json => {
            if (callbackFunction !== undefined) {
                callbackFunction(json);
            }
            return json;
        })
        .catch(error => {console.log('Error in RequestTemplate.get:\n', error)});
    }

    post(url, bodyJson, callbackFunction) {
        fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: bodyJson
        })
        .then(response => response.json())
        .then(json => {
            console.log('Result of request in RequestTemplate.post:\n', json);
            return json;
        })
        .then(json => {
            if (callbackFunction !== undefined) {
                callbackFunction(json);
            }
            return json;
        })
        .catch(error => {console.log('Error in RequestTemplate.post:\n', error)});
    }

    put(url, bodyJson, callbackFunction) {
        fetch(url, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: bodyJson
        })
        .then(response => response.json())
        .then(json => {
            console.log('Result of request in RequestTemplate.put:\n', json);
            return json;
        })
        .then(json => {
            if (callbackFunction !== undefined) {
                callbackFunction(json);
            }
            return json;
        })
        .catch(error => {console.log('Error in RequestTemplate.put:\n', error)});
    }

    delete(url, callbackFunction) {
        fetch(url, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(json => {
            console.log('Result of request in RequestTemplate.delete:\n', json);
            return json;
        })
        .then(json => {
            if (callbackFunction !== undefined) {
                callbackFunction(json);
            }
            return json;
        })
        .catch(error => {console.log('Error in RequestTemplate.delete:\n', error)});
    }
}

function logCallback(parameter) {
    console.log('logCallback was called with parameter:\n', parameter);
}

console.log('===Test RequestTemplate');
let requestTemplate = new RequestTemplate('pass an argument');
console.log('===Test RequestTemplate.get');
requestTemplate.get('/data', logCallback);
console.log('===Test RequestTemplate.post');
requestTemplate.post('/data', '{"param1":"value1"}', logCallback);
console.log('===Test RequestTemplate.put');
requestTemplate.put('/data', '{"param1":"value1"}', logCallback);
console.log('===Test RequestTemplate.delete');
requestTemplate.delete('/data', logCallback);