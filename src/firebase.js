import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyD2eHUyzUPT6vyxPpGVjEYcn7B0y6sf4lI",
  authDomain: "unichat-f850f.firebaseapp.com",
  projectId: "unichat-f850f",
  storageBucket: "unichat-f850f.appspot.com",
  messagingSenderId: "184010527245",
  appId: "1:184010527245:web:a4c58807036e7f6fa6fb44"
}).auth()
