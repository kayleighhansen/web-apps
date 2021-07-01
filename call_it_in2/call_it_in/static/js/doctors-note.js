
document.querySelector(".doctors-note-form").addEventListener("submit", function() {

    if (document.querySelector("#fname").value == "" 
        | document.querySelector("#lname").value == "") {
            alert("Please enter your first and last name:");
 
    };

})

