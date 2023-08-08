import firebase  from "firebase";
import "firebase/auth";
import 'firebase/firebase'
import 'firebase/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCpjb3ugNUHCkTKyh-CBJl25NqMwsvCqkI",
    authDomain: "olx-clone-12d53.firebaseapp.com",
    projectId: "olx-clone-12d53",
    storageBucket: "olx-clone-12d53.appspot.com",
    messagingSenderId: "551624639686",
    appId: "1:551624639686:web:153bc383e14e8f117503c7",
    measurementId: "G-FK4VBNTZL4"
  };

  export default firebase.initializeApp(firebaseConfig)