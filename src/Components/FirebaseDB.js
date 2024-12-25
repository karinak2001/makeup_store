import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDwoUxTq0GM6f4xHKInj7JdfeIG64J_m58",
    authDomain: "makeupstore-1620b.firebaseapp.com",
    projectId: "makeupstore-1620b",
    storageBucket: "makeupstore-1620b.firebasestorage.app",
    messagingSenderId: "552268862483",
    appId: "1:552268862483:web:d0510ab9f4aff3905fdbe6",
    measurementId: "G-YWLTG02R4F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const database = getDatabase(app);

export default database;