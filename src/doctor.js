class Doctor  {
  findDoctorIssue(query, location) {
    return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    // let cors = (true) ? 'https://cors-anywhere.herokuapp.com/' : '';
    // (add ${cors} to front of url if cors issue)
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${query}&skip=0&limit=10&location=${location}&sort=best-match-asc&user_key=${process.env.exports.apiKey}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }

  findDoctorName(first_name, last_name, location) {
    return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    // let cors = (true) ? 'https://cors-anywhere.herokuapp.com/' : '';
    // (add ${cors} to front of url if cors issue)
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?first_name=${first_name}&last_name=${last_name}&location=${location}&distance=20&skip=0&limit=25&sort=best-match-asc&user_key=${process.env.exports.apiKey}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}

export { Doctor };
