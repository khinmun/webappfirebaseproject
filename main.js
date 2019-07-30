// Initialize Firebase
var config = {
  apiKey: "AIzaSyBaADTAoEAgPoUu64Y30mgASOTC-tDjMLg",
  authDomain: "dbnus-4e6b7.firebaseapp.com",
  databaseURL: "https://dbnus-4e6b7.firebaseio.com",
  projectId: "dbnus-4e6b7",
  storageBucket: "",
  messagingSenderId: "73353399129",
  appId: "1:73353399129:web:ce1f56aad15fdf27"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal('name');  
  var email = getInputVal('email');  
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message
  });
}
