import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Doctor } from './doctor.js';

$(document).ready(function() {
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
      runGame(hangman);
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
