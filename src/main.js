import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Doctor } from './doctor.js';
import { PositiveResult, NegativeResult, ErrorResult } from './BDApi.js';

$(document).ready(function() {

  $('#issueSubmit').click(function(event) {
    event.preventDefault();
    $('#doctor_result').text('');
    const query = $('#query').val();
    let location_full = $('#user_location_state').val() + "-" + $('#user_location_city').val();
    const location_slug = location_full.toLowerCase();
    const name = $('#name').val();
    const doctors = new Doctor();
    const promise = doctors.findDoctor(name, query, location_slug);

    PositiveResult(name, query, location_slug, promise);
  })
});
