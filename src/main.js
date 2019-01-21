import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Doctor } from './doctor.js';
import { BDApi } from './BDApi.js';

$(document).ready(function() {
  const doctors = new Doctor
  const api = new BDApi

  $('#issueSubmit').click(function(event) {
    event.preventDefault();
      const query = $('#query').val();
      const user_location_slug = ((this.user_location_state + "-" + this.user_location_city).toLowerCase().val());
      const name = $('#name').val();
      $('#doctor_result').empty();
      const promise = doctor.findDoctor(name, query, user_location_slug);
      PositiveResult(name, query, user_location_slug, promise);
    })
});
