import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDUDblR8vuFpJSgcbAysNWW8oT_Wlh4xEA",
    authDomain: "plasticcoachlogin.firebaseapp.com",
    databaseURL: "https://plasticcoachlogin.firebaseio.com",
    projectId: "plasticcoachlogin",
    storageBucket: "plasticcoachlogin.appspot.com",
    messagingSenderId: "895372564845",
    appId: "1:895372564845:web:fe7007fc245d331e372264"
  };
  
  const firebaseApp =firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({timestampsInSnapshots: true});


  export default firebaseApp.firestore();