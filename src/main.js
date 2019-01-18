import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'zipcodes'
const zipcodes = require('zipcodes');
// added an npm for looking up lattitude and longitude by zipcode 'https://www.npmjs.com/package/zipcodes'
import { Doctor } from './doctor.js';

$(document).ready(function() {
  const doctor = new Doctor;

  $('#issueSubmit').click(function() {
    event.preventDefault();
    const issue = $('#issue').val();
    const zip = $('#zipcode').val();
    const zipBreakdown = zipcodes.lookup(zipcode)
    $('#.doctor_result').empty();


  function doctorIssueLocation(issue, lattitude, longitude) {
    let promise = doctor.findDoctor(issue, lattitude, longitude);
    promise.then(function(response) {
      let body = JSON.parse(response);
      if (body.data.length == 0) {
        $("#.doctor_result").text("Sorry, there are no doctors that fit the entered data")
      }
      else {
        body.data.forEach(function(element) {
          let acceptingNewPatients = element.practices[0].accepts_new_patients
          function openOrClosed(value) {
            let answer;
            if (value == true) {
              answer = "Yes, they are accepting new patients at this time."
            }
            else {answer == "No, we are sorry but they are not accepting any new patients at this time."}
            return answer
            }



          });

        }
      })
    };

    },


    function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    })

});
