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
    const url = `https://api.betterdoctor.com/2016-03-01/doctors?location=45.51,-122.65,11&user_key=${apiKey}&limit=1&specialty_uid=${specialty}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

    const getElements = function(response) {
      $('.showDoc').text(`${response.meta.total} Doctors specialize in that field in Portland ${response.data}`);
      console.log(response.meta.limit);
      console.log(response.data[0]);
    }

  });
});
