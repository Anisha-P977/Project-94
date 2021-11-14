
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyD7tiZ2XJ8tI3vgwvjsDKQeFrcbx7FVGCM",
      authDomain: "twitter---kwitter.firebaseapp.com",
      databaseURL: "https://twitter---kwitter-default-rtdb.firebaseio.com",
      projectId: "twitter---kwitter",
      storageBucket: "twitter---kwitter.appspot.com",
      messagingSenderId: "550776731123",
      appId: "1:550776731123:web:672cead9fde8bf12e5ce86",
      measurementId: "G-EW5SNZKS86"
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";


function add_room() {
      room_name = document.getElementById("room_name").value;
      console.log("adding room name to firebase");
      firebase.database().ref("/"+ room_name).set({
            purpose: "adding room name",
            room : room_name
      });

      localStorage.setItem("room_name:", room_name);
      window.location = "kwitter_page.html";

}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("room name - " + Room_names);
                  row = "<div class = 'room_name' id = " + Room_names+" onclick= 'redirectToRoomName(this.id)'>#"+ Room_names + "</div> <hr>";
                  document.getElementById("output").innerHTML += row;


                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name:", name);
      window.location = " kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}

