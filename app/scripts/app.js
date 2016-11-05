  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBUVNXhe6134-HzWjmQ9HcyqReTr5vEstY",
    authDomain: "gchat-991ac.firebaseapp.com",
    databaseURL: "https://gchat-991ac.firebaseio.com",
    storageBucket: "gchat-991ac.appspot.com",
    messagingSenderId: "523789741351"
  };
  firebase.initializeApp(config);



  //Initialize Angular app
  var app = angular.module("groupChatApp", ["firebase"]);


  app.controller("GroupChatCtrl", function($scope, $firebaseArray, $firebaseAuth) {
    var ref = firebase.database().ref();
    var messagesRef = firebase.database().ref().child("messages");

    //Auth handler
    $scope.auth = $firebaseAuth();
    
    // create a synchronized array
    $scope.messages = $firebaseArray(messagesRef);

    //add messages to firebase db
    $scope.addMessage = function() {
      $scope.messages.$add({
        message: $scope.message,
        user: firebaseUser.displayName
      });
    };

    //Authentication state handler
    $scope.auth.$onAuthStateChanged(function(firebaseUser) {
      $scope.firebaseUser = firebaseUser;
    });


  });
