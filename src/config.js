// firebaseConfig.js
import * as firebase from 'firebase/app';
import { getAuth } from 'firebase/auth';
const { initializeApp } = require('firebase-admin/app');
const firebaseConfig = {
//var admin = require("firebase-admin");
//
//var serviceAccount = require("./camera-f3316-firebase-adminsdk-tu3vs-beb8b2f00f.json");
//
//admin.initializeApp({
//  credential: admin.credential.cert(serviceAccount)
//});
  apiKey: "AIzaSyAwGMGFYrWQta_ny7D0wu_h7fZZj5oUELM",
  authDomain: "camera-f3316.firebase.com",
  projectId: "camera-f3316",
  storageBucket: "camera-f3316.appspot.com",
  messagingSenderId: "787810253783",
  appId: "1:787810253783:android:521433dbf2f09967bfa992"
};
if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    const auth = getAuth(app);
export {firebase} ;
