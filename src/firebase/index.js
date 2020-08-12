import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyC_vL6ZtmdoViAI1OfGFjhvSXW0F6xHCNI",
    authDomain: "assignment-image.firebaseapp.com",
    databaseURL: "https://assignment-image.firebaseio.com",
    projectId: "assignment-image",
    storageBucket: "assignment-image.appspot.com",
    messagingSenderId: "553377923053",
    appId: "1:553377923053:web:85ba6e942c30c79e69f1e4",
    measurementId: "G-30DD87ZLND"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase