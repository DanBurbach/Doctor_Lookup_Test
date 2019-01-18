class Doctor {
  constructor(name) {
    this.name = name;
  }

  findDoctor(lattitude, longitude, issue) {
    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = 'https://api.betterdoctor.com/2016-03-01/practices?location='+${lattitude}+'%2C'+${longitude}+'%2C100&user_key='+${process.env.exports.apiKey};
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

  detailsDoctor() {
    let api_key = process.env.exports.apiKey;
    let doctor_uid = '';
    let url = 'https://api.betterdoctor.com/2016-03-01/doctors/' + doctor_uid + '?user_key=' + ${process.env.exports.apiKey};

    $.get(url, function (doctor-search) {
      let template = Handlebars.compile(document.getElementById('doc-template').innerHTML);
      document.getElementById('doctor-result').innerHTML = template(doctor-search);
    });
  }


}
export { Doctor };
