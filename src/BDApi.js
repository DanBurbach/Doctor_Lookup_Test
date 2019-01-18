import { Doctor } from './doctor.js';

class BDApi {

  findDoctor(lattitude, longitude, issue) {
    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = 'https://api.betterdoctor.com/2016-03-01/practices?location=${lattitude}%2C${longitude}%2C100&skip=0&limit=20&user_key=${process.env.exports.apiKey}';
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }

  findDoctorByName(firstName,lastName) {
    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = 'https://api.betterdoctor.com/2016-03-01/doctors?first_name=${firstName}&last_name=${lastName}&skip=0&limit=20&user_key=${process.env.exports.apiKey}';
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }

}
export { BDApi };
