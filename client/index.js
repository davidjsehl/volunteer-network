import firebase from 'firebase/app';
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from './routes';

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
    <Routes />,
    document.getElementById('app')
);