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
        $('.doc1').text(`List of Doctors who specialize in that field:`);
        console.log((body.data[0]).profile.first_name)
        $('.doc1Name').text(`${(body.data[0]).profile.first_name} ${(body.data[0]).profile.last_name}`);
        $('.doc1Phone').text(`${(((body.data[0]).practices[0]).phones[0]).number}`);
        $('.doc1St').text(`${((body.data[0]).practices[0]).visit_address.street}`);
        $('.doc1Zip').text(`${((body.data[0]).practices[0]).visit_address.zip}`);


      }
    });
  }

  $('#docSpecialty').click(function(){
    const specialty = $('#specialty').val();
    findDoc(specialty);
    console.log($('#specialty').val());
  });

});
