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


/*firebase.firestore().collection("Leaderboard").onSnapshot(function(querySnapShot){
  var n1 = 0; // how many A's
  var n2 = 0; // how many B's
  var n3 = 0; // how many C's
  var n4 = 0; // how many D's
  var n5 = 0; // how many E's
  var array = [];
  querySnapShot.forEach(function(doc){
    console.log("document -- ", doc.data().Score);
    var s = doc.data().Score;
    array.push(s);
    console.log(array);
    switch(s){
      case "A": n1++; $('#ans1').text(n1);break;
      case "B": n2++; $('#ans2').text(n2);break;
      case "C": n3++; $('#ans3').text(n3);break;
      case "D": n4++; $('#ans4').text(n4);break;
      case "E": n5++; $('#ans5').text(n5);break;
    }

  });
  
  console.log(querySnapShot.size);
  querySnapShot.forEach(doc => console.log(doc.data()));

});*/