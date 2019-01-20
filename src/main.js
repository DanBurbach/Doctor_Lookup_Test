import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Doctor } from './doctor.js';
import { BDApi } from './BDApi.js';

$(document).ready(function() {
  const doctor = new Doctor;
  const bdapi = new BDApi;

  $('#issueSubmit').click(function(event) {
    event.preventDefault();
    $('#doctor_result').empty();
    const name = $('#name').val();
    const query = $('#query').val();
    const user_location = $('#user_location_slug').val();

    let doctor = new Doctor.findDoctor(name, query, user_location);
    let promise = doctor.findDoctor(name, query, user_location);

    promise.then(function(response) {
      const body = JSON.parse(response);

      if (body.data.length == 0) {
        $(".doctor_result").append("Sorry, there are no doctors that fit the entered data")
      } else {
        body.data.forEach(function(element) {





      function acceptingNewPatients(value) {
        let acceptingNewPatients = element.practices[0].accepts_new_patients
        let answer;
        if (value == true) {
          answer = "Yes, they are accepting new patients at this time."
        } else {answer == "No, we are sorry but they are not accepting any new patients at this time."}
        return answer
      }


        })
      }, function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      }
    })
  });

});
