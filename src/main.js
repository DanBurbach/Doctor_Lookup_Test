import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Doctor } from './doctor.js';
import { PositiveResult, NegativeResult, ErrorResult } from './BDApi.js';

$(document).ready(function() {
  const doctors = new Doctor

  $('#issueSubmit').click(function(event) {
    event.preventDefault();
      const query = $('#query').val();
      const location_slug = ((this.user_location_state + "-" + this.user_location_city).toLowerCase().val());
      const name = $('#name').val();
      $('#doctor_result').empty();
      const promise = doctors.findDoctor(name, query, location_slug);
      PositiveResult(name, query, location_slug, promise);
    })
});
