function login(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

if(username=="admin" && password=="1234") window.location.href="cnt/Ideax.html";
else window.alert("Sorry Please try again");
 

}