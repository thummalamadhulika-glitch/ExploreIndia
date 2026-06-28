function validateForm(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let phone=document.getElementById("phone").value;
let destination=document.getElementById("destination").value;

if(name=="" || email=="" || phone==""){
alert("Please fill all the fields.");
return false;
}

if(phone.length!=10){
alert("Please enter a valid 10-digit phone number.");
return false;
}

if(destination=="Select Destination"){
alert("Please select a destination.");
return false;
}

alert("Booking Submitted Successfully!");

return false;

}