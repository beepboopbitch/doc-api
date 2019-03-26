import $ from 'jquery';
import './css/styles.css';
import 'bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Doc } from './business.js'

$(document).ready(function(){

  function findDoc(specialty){
    const docs = new Doc;
    const promise = docs.getDoc(specialty);
    promise.then(function(response){
      const body = JSON.parse(response);
      const checkData = docs.checkResults(body);
      if (checkData === false) {
        $(".errors").text(`Cant't find doctors who specialize in ${specialty}`);
      } else if (checkData === true) {
        $(".errors").text(``);
        $('.doc1').text(`List of Doctors who specialize in that field:`);
        $('.doc1Name').text(`${(body.data[0]).profile.first_name} ${(body.data[0]).profile.last_name}`);
        $('.doc1Phone').text(`${(((body.data[0]).practices[0]).phones[0]).number}`);
        $('.doc1St').text(`${((body.data[0]).practices[0]).visit_address.street}`);
        $('.doc1Zip').text(`${((body.data[0]).practices[0]).visit_address.zip}`);

        $('.doc2').text(`List of Doctors who specialize in that field:`);
        $('.doc2Name').text(`${(body.data[1]).profile.first_name} ${(body.data[1]).profile.last_name}`);
        $('.doc2Phone').text(`${(((body.data[1]).practices[0]).phones[0]).number}`);
        $('.doc2St').text(`${((body.data[1]).practices[0]).visit_address.street}`);
        $('.doc2Zip').text(`${((body.data[1]).practices[0]).visit_address.zip}`);

        $('.doc3').text(`List of Doctors who specialize in that field:`);
        $('.doc3Name').text(`${(body.data[2]).profile.first_name} ${(body.data[2]).profile.last_name}`);
        $('.doc3Phone').text(`${(((body.data[2]).practices[0]).phones[0]).number}`);
        $('.doc3St').text(`${((body.data[2]).practices[0]).visit_address.street}`);
        $('.doc3Zip').text(`${((body.data[2]).practices[0]).visit_address.zip}`);
      }
    });
  }
  $('#docSpecialty').click(function(){
    const specialty = $('#specialty').val();
    findDoc(specialty);
  });

});
