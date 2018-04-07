import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAQ2n2wa8w86eTE8_uf4b4aNif0p20MBbU",
  authDomain: "pet-friendly-mexico.firebaseapp.com",
  databaseURL: "https://pet-friendly-mexico.firebaseio.com",
  projectId: "pet-friendly-mexico",
  storageBucket: "pet-friendly-mexico.appspot.com",
  messagingSenderId: "704117671668"
}

firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const auth = firebase.auth
export const provider = new firebase.auth.FacebookAuthProvider();
