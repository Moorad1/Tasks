email_input  = document.getElementById("email_input");
password_input = document.getElementById("password_input");

function checkFields() {
Fields = document.getElementsByTagName("input")
console.log(Fields)
if (Fields[0].value.length > 2 && Fields[1].value.length > 2 && Fields[2].value.length > 2 && document.getElementById("checkbox").checked) {
  createAccount()
}else if (!document.getElementById("checkbox").checked) {
  document.getElementById("error").style.display = "initial"
  document.getElementById("error").innerHTML = "You need to accept the Terms of Conditions and the Privacy Policy"
}else {
  document.getElementById("error").style.display = "initial"
  document.getElementById("error").innerHTML = "You have missed a field, All field needs to be filled"
}
} 

function createAccount() {
  email = email_input.value;
  password = password_input.value;

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    errorCode = error.code;
    errorMessage = error.message;
    console.log(errorMessage)
    document.getElementById("error").style.display = "initial"
    document.getElementById("error").innerHTML = errorMessage;
  })


  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
    firebase.auth().currentUser.updateProfile({
      displayName: Fields[0].value
    }).then(function() {    
    window.location.href = "main.html"
    })  
  }
  })
}