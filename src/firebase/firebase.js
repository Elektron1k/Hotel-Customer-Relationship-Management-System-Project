// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, ref } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA3BTx5dV7AzjaGAxoNjnQfgsrkvbow6vc',
  authDomain: 'hotel-management-system-1f3ad.firebaseapp.com',
  projectId: 'hotel-management-system-1f3ad',
  storageBucket: 'hotel-management-system-1f3ad.appspot.com',
  messagingSenderId: '421062051571',
  appId: '1:421062051571:web:22e134ba61a1bd265b9986',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export const roomRef = ref(db, 'Rooms');
export const accountRef = ref(db, 'Accounts');
