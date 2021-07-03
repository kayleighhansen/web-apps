
document.querySelector(".submit-btn").addEventListener("click", function(event) {

    if (document.querySelector("#fname").value == ""
        | document.querySelector("#lname").value == "") {
        alert("Please enter your first and last name:");
    } else {

        event.preventDefault();

        // const queryString = window.location.search;
        // const urlParams = new URLSearchParams(queryString);

        // var userFirstName = urlParams.get('fname');
        // var userLastName = urlParams.get('lname');
        // var userDoctorName = urlParams.get('doctor');
        // var medicalOffice = urlParams.get('office');
        // var illnessDate = urlParams.get('date');
        // var userSymptoms = urlParams.get('symtoms');
        // var illnessDays = urlParams.get('days');

        var userFirstName = document.querySelector("#fname").value;
        var userLastName = document.querySelector("#lname").value;
        var userDoctorName = document.querySelector("#doctor").value;
        var userSymptoms = document.querySelector("#symptoms").value;
        var medicalOffice = document.querySelector("#office").value;
        var illnessDate = document.querySelector("#date").value;
        var illnessDays = document.querySelector("#days").value;




        document.querySelector("main").innerHTML = "";
        document.querySelector("main").innerHTML +=
            `<div class="finished-doctors-note">
            <h3>${medicalOffice},</h3><br><br>
            <h4>Date: ${illnessDate}</h4><br><br>
                 <p>Please excuse ${userFirstName} ${userLastName} from work ${illnessDate}. ${userSymptoms} and shouldn't be coming to work for his/her/their own safety as well as their coworkers. 
                 I am prescribing ${illnessDays} day(s) off of work for rest and recuperation.</p><br><br>
                 <h3>${userDoctorName}</h3>
                 <h3 style="font-family: 'Herr Von Muellerhoff', cursive;">${userDoctorName}</h3></div><br>
                 <div class="reload-btn-div"><button id="newSubmit" class="reload-btn">New Note</button><div>`;

        document.querySelector("#newSubmit").addEventListener("click", function () {
            location.reload();
        });
    };

})

