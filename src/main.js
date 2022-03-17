import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

//Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCnPHPcFwctnoOrmzYsMyzC3j-653tcMt4",

  authDomain: "projetoandreia-24413.firebaseapp.com",

  projectId: "projetoandreia-24413",

  storageBucket: "projetoandreia-24413.appspot.com",

  messagingSenderId: "494585130290",

  appId: "1:494585130290:web:59350ba2a1b9c72701bb2b",

  measurementId: "G-TBJNWQZWKG"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

