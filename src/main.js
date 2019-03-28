import $ from 'jquery';
import './css/styles.css';
import 'bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Doc } from './business.js'

$(document).ready(function(){

  function findDoc(specialty, name){
    const docs = new Doc;
    const promise = docs.getDoc(specialty, name);
    promise.then(function(response){
      const body = JSON.parse(response);
      const checkData = docs.checkResults(body);
      console.log()
      if (checkData === false) {
        $(".errors").text(`Cant't find doctors based on ${specialty} ${name}`);
      } else if (checkData === true) {
        $(".errors").text(``);
        $('.doc1').text(`List of Doctors:`);
        $('.doc1Name').text(`${(body.data[0]).profile.first_name} ${(body.data[0]).profile.last_name}`);
        $('.doc1Phone').text(`${(((body.data[0]).practices[0]).phones[0]).number}`);
        $('.doc1St').text(`${((body.data[0]).practices[0]).visit_address.street}`);
        $('.doc1Zip').text(`${((body.data[0]).practices[0]).visit_address.zip}`);
        $('.doc1Accept').text(`Accepts new patients: ${((body.data[0]).practices[0]).accepts_new_patients}`);

        $('.doc2').text(`List of Doctors who specialize in that field:`);
        $('.doc2Name').text(`${(body.data[1]).profile.first_name} ${(body.data[1]).profile.last_name}`);
        $('.doc2Phone').text(`${(((body.data[1]).practices[0]).phones[0]).number}`);
        $('.doc2St').text(`${((body.data[1]).practices[0]).visit_address.street}`);
        $('.doc2Zip').text(`${((body.data[1]).practices[0]).visit_address.zip}`);
        $('.doc2Accept').text(`Accepts new patients: ${((body.data[1]).practices[0]).accepts_new_patients}`);


        $('.doc3').text(`List of Doctors who specialize in that field:`);
        $('.doc3Name').text(`${(body.data[2]).profile.first_name} ${(body.data[2]).profile.last_name}`);
        $('.doc3Phone').text(`${(((body.data[2]).practices[0]).phones[0]).number}`);
        $('.doc3St').text(`${((body.data[2]).practices[0]).visit_address.street}`);
        $('.doc3Zip').text(`${((body.data[2]).practices[0]).visit_address.zip}`);
        $('.doc3Accept').text(`Accepts new patients: ${((body.data[2]).practices[0]).accepts_new_patients}`);
      }
    });
  }
  $('#docSpecialty').click(function(){
    const specialty = $('#specialty').val();
    const name = $('#docSearch').val();
    findDoc(specialty, name);
  });
});
