import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// Your web app's Firebase configuration
const config = {
  apiKey: 'AIzaSyAkuG7tzJr_ijaFqUd3XXRKUfkd-xqZ420',
  authDomain: 'firewit-dev.firebaseapp.com',
  projectId: 'firewit-dev',
  storageBucket: 'firewit-dev.appspot.com',
  messagingSenderId: '914441614454',
  appId: '1:914441614454:web:574517d48bdb9f24645b57'
}

// Initialize Firebase
firebase.initializeApp(config)

// Utilities
export const GoogleAuthProvider = firebase.auth.GoogleAuthProvider
export const GithubAuthProvider = firebase.auth.GithubAuthProvider
export const auth = firebase.auth()

export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp
export const firestore = firebase.firestore()
