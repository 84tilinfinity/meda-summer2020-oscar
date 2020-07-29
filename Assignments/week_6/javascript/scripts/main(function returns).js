 // FUNCTIONS



var mySpecialNumber = "8";

// function myFunction() {
//     var response = prompt("How are you today?");
//     var responseModified = response + "I don't care";
//     console.log("They said: " + responseModified + " and the special number is " + mySpecialNumber); 
// }

// ANY INFORMATION THAT ENTERS JAVASCRIPT FROM HTML OR CSS WILL THE THE DATATYPE OF STRING, REGARDLESS OF CONTENT.

function myFunction() {
    var response = prompt("How are you today?");

    if (response === "") {
        alert("You did not type anything in!");
        return false;
    } else {
        console.log(response);
        return true;
    }
}

var didTheyRead = myFunction();

while (didTheyRead === false) {
    didTheyRead = myFunction();
}
