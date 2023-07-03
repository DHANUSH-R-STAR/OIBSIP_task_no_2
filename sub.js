const firebaseConfig = {
    apiKey: "AIzaSyAFCh9R_JR_BEhW8EOOidb4jfHTYLczqxY",
    authDomain: "mail-details-form.firebaseapp.com",
    databaseURL: "https://mail-details-form-default-rtdb.firebaseio.com",
    projectId: "mail-details-form",
    storageBucket: "mail-details-form.appspot.com",
    messagingSenderId: "67896581579",
    appId: "1:67896581579:web:6b3c82c86e8d313ab86a4e"
};

firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref("contact_form");

document.getElementById("contact_form").addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();
    var name= getElementVal("name");
    var email=getElementVal("email");
    var text=getElementVal("text");

    saveMessages(name,email,text);

    document.getElementById("contact_form").reset();

}

const saveMessages = (name,email,text) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name : name,
        email : email,
        text : text,
    })
};

const getElementVal = (id) =>{
    return document.getElementById(id).value;

};