console.log(hi);



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC3aZ824vcGsi1WPV4-bZ8Z51xS9wyfLwU",
    authDomain: "train-d4147.firebaseapp.com",
    databaseURL: "https://train-d4147.firebaseio.com",
    projectId: "train-d4147",
    storageBucket: "",
    messagingSenderId: "448965087891"
  };
  firebase.initializeApp(config);

var database= firebase.database();
//on submit record all the data
$("#submit").on("click".function(){
//store input in variables
        var trainName = $("#name").val();
              console.log(trainName);
        var destination = $("#destination").val();
              console.log(destination);
        var firsttraintime = $("#firsttraintime").val();
              console.log(firsttraintime);
        var frequency = $("#frequency").val();
              console.log(frequency);
//create object out of the variables
        var train{
          name=trainName,
          Destination=destination,
          FirstTrainTime=firsttraintime,
          Frequency=frequency,
        }
        console.log(train);
//PUSH TO DB
database.ref().push(train);

})
//display in HTML
//listen for added item and create a row






//input feed into firebase
//fb table feed into train table w/ one ca;culated feed
