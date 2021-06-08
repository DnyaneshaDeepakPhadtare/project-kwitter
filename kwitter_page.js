//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBuxieqt7jQsvJvXPdnYYKc9WuDRK8kgzk",
      authDomain: "kwitter-aceae.firebaseapp.com",
      databaseURL: "https://kwitter-aceae-default-rtdb.firebaseio.com",
      projectId: "kwitter-aceae",
      storageBucket: "kwitter-aceae.appspot.com",
      messagingSenderId: "474275910981",
      appId: "1:474275910981:web:f446aa9f645c53bd959a2c",
      measurementId: "G-G7VT22L30J"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];

name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";

row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();

function updateLike(message_id){
      console.log("click on like button-"+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      console.log(updated_likes);

      firebas.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });
}

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            msg:msg,
            like:0
      });
}


function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "index.html";
      }