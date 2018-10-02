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
    }
  });

function checkFields() {
  Fields = document.getElementsByTagName("input")
  if (Fields[0].value.length > 1 && Fields[1].value.length > 1) {
    document.getElementById("loader_background").style.display = "initial"
    login();
  } else {
    document.getElementById("error").innerHTML = "You have missed a field, All field needs to be filled"
    document.getElementById("error").style.display = "block"
  }
}


function login() {
var email = email_input.value;
var password = password_input.value;
document.getElementById("loader_background").style.display = "initial"
firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  document.getElementById("error").innerHTML = error.message
  document.getElementById("error").style.display = "block"
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  window.location.href = "main.html"
  } else {
    document.getElementById("loader_background").style.display = "none"
  }
});
}
