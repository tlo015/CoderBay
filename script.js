// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)

// Assign the reference to the database to a variable named 'database'
//var database = ...

// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)

var config = {
    apiKey: "AIzaSyDjX0cG4HMt7bMw0uwu24r6D4CmWorPQvw",
    authDomain: "codersbay-bootcamp.firebaseapp.com",
    databaseURL: "https://codersbay-bootcamp.firebaseio.com",
    projectId: "codersbay-bootcamp",
    storageBucket: "",
    messagingSenderId: "700759619524"
  };
  
  firebase.initializeApp(config);
  
  // VARIABLES
  // --------------------------------------------------------------------------------
  

// Initial Valuesvar database = firebase.database();
var database = firebase.database();

var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

//  At the page load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.


//Added in class  -- CO
database.ref().on("value", function(snapshot) {
    var currentBidder = $("#bidder-name").val().trim(); //captures the input and trims empty spaces
    var currentPrice = $("#bidder-price").val().trim(); //captures the input and trims empty spaces
    
    console.log(currentPrice); 
    console.log(currentBidder); 
    console.log(snapshot.val()); 

    database.ref().set({
      highprice: highPrice, 
      highbidder: highBidder
    }); 

  }); 
// If Firebase has a highPrice and highBidder stored (first case)

// if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {
//     // do something here -- CO

// }
// else {
//     // do something here -- CO
// }

// Set the variables for highBidder/highPrice equal to the stored values in firebase.
// highPrice = ...
// highBidder = ...


// Change the HTML to reflect the stored values


// Print the data to the console.


// Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.


// Change the HTML to reflect the initial values


// Print the data to the console.




// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button

// prevent form from submitting with event.preventDefault() or returning false

// Get the input values


// Log the Bidder and Price (Even if not the highest)


// If Then statements to compare against previous high bidder


// Alert that they are High Bidder


// Save the new price in Firebase


// Log the new High Price


// Store the new high price and bidder name as a local variable (could have also used the firebase variable)


// Change the HTML to reflect the new high price and bidder

// Else tell user their bid was too low via alert