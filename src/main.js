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
      var i =0;
      var total = response.data.length;
      var ids = [];
      for(; i < total; i++) {
        ids.push( data[ i ].id );
      }
      console.log(ids);
      $('.showDoc').text(`Doctors in portland who can specialize in that field: ${response.meta.limit}, ${response}`);
    }

  });
});
