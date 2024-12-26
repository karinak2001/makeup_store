import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyABlrwpzABb9KgGh8tXvaBMkwOLmANhtTg",
    authDomain: "makeupstore-875af.firebaseapp.com",
    databaseURL: "https://makeupstore-875af-default-rtdb.firebaseio.com/",
    projectId: "makeupstore-875af",
    storageBucket: "makeupstore-875af.firebasestorage.app",
    messagingSenderId: "379599996018",
    appId: "1:379599996018:web:a56a8c72b7952a5faceeeb",
    measurementId: "G-PXYGYLRT3X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const database = getDatabase(app);

export default database;