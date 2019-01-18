 export class Doctor {

  constructor(name, issue) {
    this.name = name;
    this.issue = issue;

  }

  findDoctor(zipcode, issue) {
    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=' + exports.apiKey;
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
    
    $.get(url, function(doctor-search) {
      let template = Handlebars.compile(document.getElementById('doctor-search').innerHTML);
      document.getElementById('doctor-result').innerHTML = template(doctor-search);
    });

  }



}
