

// Global Variables
var trainName = "";
var trainDestination = "";
var trainTime = "";
var trainFrequency = "";
var nextArrival = "";
var minutesAway = "";

// jQuery global variables
var elTrain = $("#train-name");
var elTrainDestination = $("#train-destination");
// form validation for Time using jQuery Mask plugin
var elTrainTime = $("#train-time").mask("00:00");
var elTimeFreq = $("#time-freq").mask("00");

// Initialize Firebase
var config = {
apiKey: "AIzaSyBEc95Ko22nJF0obmPj4ENnmW4RYJ2RtjI",
authDomain: "train-scheduler-926da.firebaseapp.com",
databaseURL: "https://train-scheduler-926da.firebaseio.com",
projectId: "train-scheduler-926da",
storageBucket: "train-scheduler-926da.appspot.com",
messagingSenderId: "1081588299578"
};

firebase.initializeApp(config);

console.log(firebase);





    
