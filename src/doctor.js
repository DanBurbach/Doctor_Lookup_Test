class Doctor  {
constructor(name) {
    this.name = name;
  }
function doctorIssueLocation(issue, lattitude, longitude) {
  let promise = doctor.findDoctor(issue, lattitude, longitude);
  promise.then(function(response) {
    let body = JSON.parse(response);
    if (body.data.length == 0) {
      $("#.doctor_result").text("Sorry, there are no doctors that fit the entered data")
    } else {
      body.data.forEach(function(element) {
        let acceptingNewPatients = element.practices[0].accepts_new_patients
        function openOrClosed(value) {
          let answer;
          if (value == true) {
            answer = "Yes, they are accepting new patients at this time."
          }
          else {answer == "No, we are sorry but they are not accepting any new patients at this time."}
          return answer
          }


        })

      }
    })
  }
};

export { Doctor };
