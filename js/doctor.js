var apiKey = require('./../.env').apiKey;

function Doctor () {

}

Doctor.prototype.getDoctor = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue +'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(response) {
    $('.output').text("Results for your " + medicalIssue + " are the following: ")
    response.data.forEach(function(doctor) {
      $('.result').append(`
        <li>${doctor.profile.first_name} ${doctor.profile.last_name}</li>
      `)
    })
      console.log(response);
    })
   .fail(function(error){

      console.log("fail");
    });

};

exports.doctorModule = Doctor;
