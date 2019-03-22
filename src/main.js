import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function(){
  $('#docSpecialty').click(function(){
    const specialty = $('#specialty').val();
    $('#specialty').val();

    let request = new XMLHttpRequest();
    const apiKey = process.env.apiKey;
    const url = `https://api.betterdoctor.com/2016-03-01/doctors?location=45.51,-122.65,11&user_key=${apiKey}`;





  });
});
