import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { userCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyA-dY073RUuJ3T6YXUKp7aAGz7ZW12CRFg",
  authDomain: "chatappdemo-f3a64.firebaseapp.com",
  projectId: "chatappdemo-f3a64",
  storageBucket: "chatappdemo-f3a64.appspot.com",
  messagingSenderId: "935393241096",
  appId: "1:935393241096:web:2b853d49216c058a3cc9bd",
  measurementId: "G-0CD4TRJHP4"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
