import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBBdOwND3mvkfXsTe18hTNfF8Yyoj-D04Y",
    authDomain: "rwitter-a4f2f.firebaseapp.com",
    projectId: "rwitter-a4f2f",
    storageBucket: "rwitter-a4f2f.appspot.com",
    messagingSenderId: "739216052742",
    appId: "1:739216052742:web:dc5cb4525bbd537b7a6987"
  };

// initialize firestore
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }