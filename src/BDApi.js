import $ from 'jquery';

function positiveResultIssue(query, location, promiseDoctor) {
  let promise = promiseDoctor;
  promise.then(function(response) {
    let doctors = JSON.parse(response);
    if (doctors.data.length == 0) {
      $(".doctor_result").append("Sorry, there are no doctors that fit the entered data");
  } else {
    doctors.data.forEach(function(doctor) {
      function yesOrno(response) {
        let answer;
        if (response == true) {
          answer = "Yes, they are accepting new patients at this time."
        } else {answer == "No, we are sorry but they are not accepting any new patients at this time."}
          return answer
      } const acceptingNewPatients = yesOrno(doctor.practices[0].accepts_new_patients);

      $(".doctor_result").append(`
          <div class = "card">
            <div class = "card-body">
          <td><img src="${doctor.profile.image_url}"></img></td>
            <h3>${doctor.profile.first_name} ${doctor.profile.last_name}, ${doctor.profile.title}</h3>
            <h3>Address:</h3>
              <p>${doctor.practices[0].name}</p>
              <p>${doctor.practices[0].visit_address.street}</p>
              <p>${doctor.practices[0].visit_address.city}, ${doctor.practices[0].visit_address.state_long} ${doctor.practices[0].visit_address.zip}</p>
            <h5>Website</h5>
              <p>${doctor.practices[0].website}</p>
            <h5>Accepting New Patients</h5>
              <p>${acceptingNewPatients}</p>
            <h5>Biography</h5>
              ${doctor.profile.bio}
              </div>
            </div><br>`);
          });
        }
      },
    function(error) {
      $(".doctor_result").append(`<h3>Error</h3>
        <div class = "errorBody">
        <p>An error of <code>${error}</code></p>
        <p>Please attempt your search again, thank you for your patience.</p>
        </div>`);
      });
}

function positiveResultName(first_name, last_name, location, promiseDoctor) {
  let promise = promiseDoctor;
  promise.then(function(response) {
    let doctors = JSON.parse(response);
    if (doctors.data.length == 0) {
      $(".doctor_result").append("Sorry, there are no doctors that fit the entered data");
  } else {
    doctors.data.forEach(function(doctor) {
      function yesOrno(response) {
        let answer;
        if (response == true) {
          answer = "Yes, they are accepting new patients at this time."
        } else {answer == "No, we are sorry but they are not accepting any new patients at this time."}
          return answer
      } const acceptingNewPatients = yesOrno(doctor.practices[0].accepts_new_patients);

      $(".doctor_result").append(`
          <div class = "card">
            <div class = "card-body">
          <td><img src="${doctor.profile.image_url}"></img></td>
            <h3>${doctor.profile.first_name} ${doctor.profile.last_name}, ${doctor.profile.title}</h3>
            <h3>Address:</h3>
              <p>${doctor.practices[0].name}</p>
              <p>${doctor.practices[0].visit_address.street}</p>
              <p>${doctor.practices[0].visit_address.city}, ${doctor.practices[0].visit_address.state_long} ${doctor.practices[0].visit_address.zip}</p>
            <h5>Website</h5>
              <p>${doctor.practices[0].website}</p>
            <h5>Accepting New Patients</h5>
              <p>${acceptingNewPatients}</p>
            <h5>Biography</h5>
              ${doctor.profile.bio}
              </div>
            </div><br>`);
          });
        }
      },
    function(error) {
      $(".doctor_result").append(`<h3>Error</h3>
        <div class = "errorBody">
        <p>An error of <code>${error}</code></p>
        <p>Please attempt your search again, thank you for your patience.</p>
        </div>`);
      });
}

export { positiveResultIssue, positiveResultName };
