import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'zipcodes'
const zipcodes = require('zipcodes');
// added an npm for looking up lattitude and longitude by zipcode 'https://www.npmjs.com/package/zipcodes'
import { Doctor } from './doctor.js';
import { BDApi } from './BDApi.js';

$(document).ready(function() {
  const doctor = new Doctor;

  $('#issueSubmit').click(function() {
    event.preventDefault();
    const issue = $('#issue').val();
    const zip = $('#zipcode').val();
    const zipBreakdown = zipcodes.lookup(zip);
    $('#doctor_result').empty();
    const drIssueListing = BDApi.findDoctor(issue, zipBreakdown.lattitude, zipBreakdown.longitude);
    console.log(issue);
    console.log(zip);
    console.log(zipBreakdown);
  });

  $('#doctorNameSubmit').click(function(){
    event.preventDefault();
    const firstName = $('#firstNameInput').val();
    const lastName = $('#lastNameInput').val();
    $('#doctor_result').empty();
    const drNameListing = BDApi.findDoctorByName(firstName, lastName);
  });

});
