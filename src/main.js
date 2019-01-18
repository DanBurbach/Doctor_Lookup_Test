import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Doctor } from './doctor.js';

$(document).ready(function() {
  $('#medicalIssue-name').click(function() {
    let issue = $('#medicalIssue-input').val();
    $('#medicalIssue-input').val("";)



    promise.then(function(response) {
      let body = JSON.parse(response);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });


  $.ajax({
    url: 'https://developer.betterdoctor.com/?',
    type: 'GET',
    data: {
      format: 'json',
      paragraphs: '1',
      words: '1'
    },
    success: function(response) {
      console.log('use API');
      let issue = new Doctor(response.toLowerCase());
      let doctor = new Doctor;
      showIssue(issue);
      showDoctor(doctor);
      $('#inquire-area').show();
    },
    error: function() {
      $('#error-message').text('There was a problem proccessing your API.');
    }
  });


  function showDoctor(name) {
  }

  function showIssue(issue) {

  }
});
