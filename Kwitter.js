const firebaseConfig = {
    apiKey: "AIzaSyDvYi5M3dIl1kTsKSjo_o5lUxLfr-MdAcQ",
    authDomain: "kwitter-eb3fb.firebaseapp.com",
    databaseURL: "https://kwitter-eb3fb-default-rtdb.firebaseio.com",
    projectId: "kwitter-eb3fb",
    storageBucket: "kwitter-eb3fb.appspot.com",
    messagingSenderId: "509330995999",
    appId: "1:509330995999:web:ae2c721cc9eb14a1a8ce2a",
    measurementId: "G-5NRZTJFTD5"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "Kwitter_room.html";
}