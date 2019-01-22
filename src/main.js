import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Doctor } from './doctor.js';
import { positiveResult } from './BDApi.js';

$(document).ready(function() {
  const doctors = new Doctor

  $('#issueSubmit').click(function(event) {
    event.preventDefault();
    $('#doctor_result').text('');
    const query = $('#query').val();
    const location_full = $('#user_location_state').val() + "-" + $('#user_location_city').val();
    const location_slug = location_full.toLowerCase();
    const promiseDoctors = doctors.findDoctor(query, location_slug);
    console.log(promiseDoctors);

    positiveResult(query, location_slug, promiseDoctors);
  })
});
