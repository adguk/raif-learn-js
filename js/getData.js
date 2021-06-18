import {renderEvent} from './renderList.js';
import {addShowPopupListeners} from './popup.js';

export function fetchCallback(dataJson) {
    console.log('Inside function fetchCallback with dataJson:\n', dataJson);
}

export function fetchData(callbackFunction) {
    fetch('/data')
        .then(response => response.json())
        .then(json => {
            console.log('Result of request:\n', json);
            return json;
        })
        .then(json => {
            if (callbackFunction !== undefined) {
                for (event of json) {
                    callbackFunction(event);
                }
            }
            return json;
        })
        .then(json => addShowPopupListeners());
}

console.log('===Fetch data from server');
fetchData(renderEvent);