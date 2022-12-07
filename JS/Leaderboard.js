const firebaseConfig = {
  apiKey: "AIzaSyAf7HDmlnl8F50XRn2i6KHvCdgd66ziEew",
  authDomain: "csci-225-final.firebaseapp.com",
  projectId: "csci-225-final",
  storageBucket: "csci-225-final.appspot.com",
  messagingSenderId: "476638522914",
  appId: "1:476638522914:web:0587b2a354f5f3c26fe47b",
  measurementId: "G-HSNP6N4LCN"
};

firebase.initializeApp(firebaseConfig);


firebase.firestore().collection("Leaderboard").onSnapshot(function(querySnapShot){
  var n1 = 0; // how many A's
  var n2 = 0; // how many B's
  var n3 = 0; // how many C's
  var n4 = 0; // how many D's
  var n5 = 0; // how many E's
  var array = [];
  querySnapShot.forEach(function(doc){
    console.log("document -- ", doc.data().Score);
    var s = doc.data().Score;
    var n = doc.data().Name;
    array.push(s);
    console.log(array);
    array.sort(function(a, b) {
      return b - a;
    });

  });

  querySnapShot.forEach(function(doc){
    var s = doc.data().Score;
    var n = doc.data().Name;

    switch(s){
      case array[0]: $('#player1n').text(n); $('#ans1').text(s);break;
      case array[1]: $('#player2n').text(n); $('#ans2').text(s);break;
      case array[2]: $('#player3n').text(n); $('#ans3').text(s);break;
      case array[3]: $('#player4n').text(n); $('#ans4').text(s);break;
      case array[4]: $('#player5n').text(n); $('#ans5').text(s);break;
      case array[5]: $('#player6n').text(n); $('#ans6').text(s);break;
      case array[6]: $('#player7n').text(n); $('#ans7').text(s);break;
      case array[7]: $('#player8n').text(n); $('#ans8').text(s);break;
      case array[8]: $('#player9n').text(n); $('#ans9').text(s);break;
      case array[9]: $('#player10n').text(n); $('#ans10').text(s);break;
    }
  });
  
  console.log(array)
  console.log(querySnapShot.size);
  querySnapShot.forEach(doc => console.log(doc.data()));

});