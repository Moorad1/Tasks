var email_input = document.getElementById("email_field");
var password_input = document.getElementById("password_field");
var button = document.getElementById("sign_in");


password_input.addEventListener("keyup", function(evnt) {
  if (evnt.keyCode == 13) {
  button.click()}})
email_input.addEventListener("keyup", function(evnt) {
  if (evnt.keyCode == 13) {
  button.click()}})

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
    window.location.href = "main.html"
    } else {
    console.log("logged out")
    }
  });

function login() {
document.getElementById("loader_background").style.display = "initial"
document.getElementById("loader").style.display = "initial"

  var email = email_input.value;
var password = password_input.value;

firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(error.message)
  document.getElementById("error").childNodes[0].innerText = error.message
  document.getElementById("error").style.display = "block"
});
}
