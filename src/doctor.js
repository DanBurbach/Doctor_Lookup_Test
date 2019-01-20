import { BDApi } from './BDApi.js';

class Doctor  {
  constructor(query) {
    this.name = name;
    this.query = query;
    this.user_location_slug = user_location;
  }

  findDoctor(name, query, user_location) {
    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = 'https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${query}0&location_slug=or-portland&user_location_slug=${user_location_slug}&distance=15&skip=0&limit=35&accepts_new_patients=true&user_key=${apiKey}';
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
      let url = 'https://api.betterdoctor.com/2016-03-01/doctors?first_name=${firstName}&last_name=${lastName}&skip=0&limit=35&user_key=${apiKey}';
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

  function doctorIssueLocation(name, query, user_location) {
    let promise = doctor.findDoctor(name, query, user_location);
    promise.then(function(response) {
      const body = JSON.parse(response);


    })
  }
}

export { Doctor };
