import $ from 'jquery';
import './css/styles.css';
import 'bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function(){
  $('#docSpecialty').click(function(){
    const specialty = $('#specialty').val();
    $('#specialty').val();
    let request = new XMLHttpRequest();
    const apiKey = process.env.apiKey;
    const url = `https://api.betterdoctor.com/2016-03-01/doctors?location=45.51,-122.65,11&user_key=${apiKey}&specialty_uid=${specialty}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

    const getElements = function(response) {
      $('.doc1').text(`List of Doctors who specialize in that field:`);
      $('.doc1Name').text(`${(response.data[0]).profile.first_name} ${(response.data[0]).profile.last_name}:`);
      $('.doc1Phone').text(`${(((response.data[0]).practices[0]).phones[0]).number}`);
      $('.doc1St').text(`${((response.data[0]).practices[0]).visit_address.street}`);
      $('.doc1Zip').text(`${((response.data[0]).practices[0]).visit_address.zip}`);
      
      $('.doc2Name').text(`${(response.data[1]).profile.first_name} ${(response.data[1]).profile.last_name}:`);
      $('.doc2Phone').text(`${(((response.data[1]).practices[0]).phones[0]).number}`);
      $('.doc2St').text(`${((response.data[1]).practices[0]).visit_address.street}`);
      $('.doc2Zip').text(`${((response.data[1]).practices[0]).visit_address.zip}`);

      $('.doc3Name').text(`${(response.data[2]).profile.first_name} ${(response.data[0]).profile.last_name}:`);
      $('.doc3Phone').text(`${(((response.data[2]).practices[0]).phones[0]).number}`);
      $('.doc3St').text(`${((response.data[2]).practices[0]).visit_address.street}`);
      $('.doc3Zip').text(`${((response.data[2]).practices[0]).visit_address.zip}`);
    }
  });
});
