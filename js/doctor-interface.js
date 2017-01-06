var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  $('#doctor-search').submit(function(event) {
    event.preventDefault();
    var currentDoctorObject = new Doctor();
    var medicalIssue = $('#medical-issue').val();
    $('#medical-issue').val("");
    currentDoctorObject.getDoctor(medicalIssue)
  });
});
