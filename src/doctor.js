class Doctor  {
  findDoctor(name, query, location_slug) {
    return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    // let cors = (true) ? 'https://cors-anywhere.herokuapp.com/' : ''; (add ${cors} to front of url if issue)
    const url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${query}&location_slug=${location_slug}&user_location_slug=or-portland&skip=0&limit=30&accepts_new_patients=true&user_key=${process.env.exports.apiKey}`;
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
