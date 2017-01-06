var apiKey = require('./../.env').apiKey;

function Doctor () {

}

Doctor.prototype.getDoctor = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue +'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(response) {
    $('.output').append("<h4>" + "Results for your " + medicalIssue + " are the following: " + "</h4>")
    response.data.forEach(function(doctor) {
      $('.result').append(`
        <div class = "doc-info well"
          <ul>
            <li><h5>${doctor.profile.first_name}, ${doctor.profile.last_name}</h5>
              <p><img src= "${doctor.profile.image_url}"</p>
              <p><strong>Phone number:</strong> ${doctor.practices[0].phones[0].number}</p>
              <p><strong>Street Address:</strong> ${doctor.practices[0].visit_address.street}</p>
              <p><strong>Bio:</strong> ${doctor.profile.bio}</p>
            </li>
          </ul>
        </div>
      `)
    })
      console.log(response);
    })
   .fail(function(error){

      console.log("fail");
    });

};

exports.doctorModule = Doctor;
