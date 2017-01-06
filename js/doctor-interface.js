var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  $('#doctor-search').submit(function(event) {
    event.preventDefault();
    var currentDoctorObject = new Doctor();
    var symptom = $('#symptom').val();
    $('#symptom').val("");
    currentDoctorObject.getDoctor(symptom)
  });
});
