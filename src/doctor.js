class Doctor  {

  findDoctor(name, query, location_slug) {
    return new Promise(function(resolve, reject) {
      let cors = (true) ? 'https://cors-anywhere.herokuapp.com/' : '';
      const url = '${cors}https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${query}&location_slug=${location_slug}&user_location_slug=or-portland&skip=0&limit=30&accepts_new_patients=true&user_key=${apiKey}';
      const request = new XMLHttpRequest();

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
