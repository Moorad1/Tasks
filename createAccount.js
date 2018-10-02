email_input  = document.getElementById("email_input");
password_input = document.getElementById("password_input");

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  window.location.href = "main.html"
  }
});

function checkFields() {
Fields = document.getElementsByTagName("input")
if (Fields[0].value.length > 1 && Fields[1].value.length > 1 && Fields[2].value.length > 1 && document.getElementById("checkbox").checked) {
  document.getElementById("loader_background").style.display = "initial"
  createAccount()
}else if (!document.getElementById("checkbox").checked) {
  document.getElementById("error").style.display = "block"
  document.getElementById("error").innerHTML = "You need to accept the Terms and Conditions and the Privacy Policy"
}else {
  document.getElementById("error").style.display = "block"
  document.getElementById("error").innerHTML = "You have missed a field, All field needs to be filled"
}
} 

function createAccount() {
  email = email_input.value;
  password = password_input.value;

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    errorCode = error.code;
    errorMessage = error.message;
    document.getElementById("error").style.display = "block"
    document.getElementById("error").innerHTML = errorMessage;
  })


  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
    firebase.auth().currentUser.updateProfile({
      displayName: Fields[0].value
    }).then(function() {    
    window.location.href = "main.html"
    })  
  } else {
    document.getElementById("loader_background").style.display = "none"
  }
  })
}