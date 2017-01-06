var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  $('#doctor-search').submit(function(event) {
    event.preventDefault();
    var currentDoctorObject = new Doctor();
    debugger;
    var medicalIssue = $('#symptom').val();
    $('#symptom').val("");
    currentDoctorObject.getDoctor(medicalIssue)
  });
});
