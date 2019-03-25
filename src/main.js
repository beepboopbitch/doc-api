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
      const doc1 = response.data[0];
      const doc2 = response.data[1];
      const doc3 = response.data[2];
      const doc4 = response.data[3];
      const doc5 = response.data[4];
      const doc6 = response.data[5];
      const doc7 = response.data[6];
      const doc8 = response.data[7];
      const doc9 = response.data[8];
      const doc10 = response.data[9];
      console.log();
      $('.showDoc').text(`List of Doctors who specialize in that field: ${doc1.profile.first_name} ${doc1.profile.last_name}, ${doc2.profile.first_name} ${doc2.profile.last_name}, ${doc3.profile.first_name} ${doc3.profile.last_name}, ${doc4.profile.first_name} ${doc4.profile.last_name}, ${doc5.profile.first_name} ${doc5.profile.last_name}, ${doc6.profile.first_name} ${doc6.profile.last_name}, ${doc7.profile.first_name} ${doc7.profile.last_name}, ${doc8.profile.first_name} ${doc8.profile.last_name}, ${doc9.profile.first_name} ${doc9.profile.last_name}, ${doc10.profile.first_name} ${doc10.profile.last_name},`);
    }
  });
});
