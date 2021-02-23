import {IPDATA_API_KEY} from '../utils/constants'

export const ipService = {
    getLocation,
};
  
function getLocation() {
    var request = new XMLHttpRequest();
    return new Promise(function (resolve, reject) {
      request.open('GET',  `https://api.ipdata.co/?api-key=${IPDATA_API_KEY}`);

      request.setRequestHeader("Accept", "application/json");
      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          const obj = JSON.parse(this.responseText);
          resolve(obj);
        }
      };
  
      request.send();
    });
}

