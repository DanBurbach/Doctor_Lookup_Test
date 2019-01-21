import $ from 'jquery';

export function PositiveResult(name, query, location_slug, promises) {
  let promise = promises;
  promise.then(function(response) {
    let doctors = JSON.parse(response);
    if (doctors.data.length == 0) {
      $(".doctor_result").text("Sorry, there are no doctors that fit the entered data")
  } else {
    doctors.data.forEach(function(doctor) {
    let value = doctor.practices[0].accepts_new_patients
    function yesOrno(response) {
    let answer;
      if (response == true) {
        answer = "Yes, they are accepting new patients at this time."
    } else {answer == "No, we are sorry but they are not accepting any new patients at this time."}
      return answer
    }
      const acceptingNewPatients = yesOrno(value);
      $(".doctor_result").append(`
            <div class = "card">
                <h2>Name:</h2>
                  <h3>${doctor.profile.first_name} ${doctor.profile.last_name}, ${doctor.profile.title}</h3>
                <h3>Address:</h3>
                  <p>${doctor.practices[0].name}</p>
                  <p>${doctor.practices[0].visit_address.street}</p>
                  <p>${doctor.practices[0].visit_address.state_long}</p>
                  <p>${doctor.practices[0].visit_address.zip}</p>
                <h6>Accepting New Patients</h6>
                  <p>${acceptingNewPatients}</p>
                  <h3>Biography</h3>
                  ${doctor.profile.dynamic_bio}
                    <table>
                      <tr>
                        <th>Picture</th>
                        <td><img src="${doctor.profile.image_url}"></img></td>
                      </tr>

                      <tr>
                        <th>Specialties</th>
                        <td>
                        ${doctor.profile.specialties}
                        </td>
                      </tr>
                    </table>
                </div>`
              );
          })
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


// export function NegativeResult(query) {
//   let result = document.createElement('div');
//   result.innerHTML =
//   '<div class = "result">
//   <h3>No Results Found</h3>
//   <div class = "negativeBody">
//   <p>Your search for <code>${query}</code> returned no results.</p>
//   <p>Please try again, thank you.</p>
//   </div>';
//
//   return result;
// }
