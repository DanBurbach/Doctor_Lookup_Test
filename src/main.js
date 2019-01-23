import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Doctor } from './doctor.js';
import { positiveResultIssue, positiveResultName } from './BDApi.js';

$(document).ready(function() {
  const doctors = new Doctor

  $('#issueSubmit').click(function(event) {
    event.preventDefault();
    $('#doctor_result').hide('');
    const query = $('#query').val();
    const location_full = $('#user_location_state').val() + "-" + $('#user_location_city').val();
    const location = location_full.toLowerCase();
    const promiseDoctor = doctors.findDoctorIssue(query, location);
    positiveResultIssue(query, location, promiseDoctor);
  });

  $('#nameSubmit').click(function(event) {
    event.preventDefault();
    $('#doctor_result').hide('');
    let first_name = $('#first_name').val();
    let last_name = $('#last_name').val();
    const location_full = $('#user_location_state').val() + "-" + $('#user_location_city').val();
    const location = location_full.toLowerCase();
    console.log(first_name);
    console.log(last_name);
    const promiseDoctor = doctors.findDoctorName(first_name, last_name, location);
    positiveResultName(first_name, last_name, location, promiseDoctor);
    console.log(promiseDoctor);
  });
});
