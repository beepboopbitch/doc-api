import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function(){
  let request = new XMLHttpRequest();
  const url = `https://api.betterdoctor.com/2016-03-01/doctors?location=45.51,-122.65,11&user_key=${process.env.apiKey}`;
});
