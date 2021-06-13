export function fetchCallback(dataJson) {
    console.log('Inside function fetchCallback with dataJson:\n', dataJson);
}

export function fetchData() {
    fetch('/data')
        .then(response => response.json())
        .then(json => {
            console.log('Result of request:\n', json);
            return json;
        })
        .then(json => fetchCallback(json));
}

console.log('===Test fetchData');
fetchData();