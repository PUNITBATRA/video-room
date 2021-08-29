import firebase from 'firebase'
var firebaseConfig = {
  apiKey: "AIzaSyASMEycSAlC4uloQKE963Uf83a9qNUzto8", 
  databaseURL:"https://video-room-42ff4-default-rtdb.firebaseio.com/" 
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase;

var firepadRef = firebase.database().ref();

export const userName = prompt("Enter your name?");
const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id");

if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  window.history.replaceState(null, "Meet", "?id=" + firepadRef.key);
}

export default firepadRef;
