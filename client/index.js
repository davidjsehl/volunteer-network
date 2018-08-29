import firebase from 'firebase';
import React from "react";
import ReactDOM from "react-dom";

var config = {
    apiKey: "AIzaSyAf11bA9NheHrZy3v97wQ2IIEJvBFcBuAU",
    authDomain: "volunteer-network-2cb0a.firebaseapp.com",
    databaseURL: "https://volunteer-network-2cb0a.firebaseio.com",
    projectId: "volunteer-network-2cb0a",
    storageBucket: "volunteer-network-2cb0a.appspot.com",
    messagingSenderId: "571780306177"
};
firebase.initializeApp(config);

ReactDOM.render(
    <div>Hello, world!</div>,
    document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);