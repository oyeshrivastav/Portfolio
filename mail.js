const firebaseConfig = {
    apiKey: "AIzaSyBZzOY1_4paadJ0-0kN61UBNr7R0vlMBG8",
    authDomain: "contactform-protfolio.firebaseapp.com",
    databaseURL: "https://contactform-protfolio-default-rtdb.firebaseio.com",
    projectId: "contactform-protfolio",
    storageBucket: "contactform-protfolio.appspot.com",
    messagingSenderId: "588796914949",
    appId: "1:588796914949:web:ee2c9c619275e05ee39b6c"
  };
  //initialise firebase
  firebase.initializeApp(firebaseConfig);

  //refrence your database
  var contactformDB = firebase.database().ref('contactform-portfolio');

  document.getElementById("contactForm").addEventListener('submit', submitForm);

  function submitForm(e){
    e.preventDefault();
    var firstname = getElementVal('firstname');
    var lastname = getElementVal('lastname');
    var emailid = getElementVal('emailid');
    var phonenumber = getElementVal('phonenumber');
    var works = getElementVal('works');
    var contentmsg =getElementVal('contentmsg');

   saveMessages(firstname, lastname, emailid, phonenumber, works, contentmsg);

   //enable the alert
   document.querySelector(".alert").style.display = "block";

   //remove the alert
   setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
   }, 3000);
   //reset the form
   document.getElementById("contactForm").reset();
  }

  const saveMessages =(firstname, lastname, emailid, phonenumber, works, contentmsg) =>{
    var newContactForm = contactformDB.push();
    newContactForm.set({
        Name1 : firstname,
        Name2 : lastname,
        Email_id: emailid,
        Phone_number : phonenumber,
        Work : works,
        Message : contentmsg,
    })
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }