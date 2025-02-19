import { initializeApp } from "firebase/app"; 
import { getDatabase, ref, set, push, onValue, remove, update } from "firebase/database"; 
 
const firebaseConfig = {
    apiKey: "AIzaSyBLX5-P3C1KcmZhmbvMKOu-_841sgu7cGc",
    authDomain: "teste-firebase-cb075.firebaseapp.com",
    databaseURL: "https://teste-firebase-cb075-default-rtdb.firebaseio.com/",
    projectId: "teste-firebase-cb075",
    storageBucket: "teste-firebase-cb075.firebasestorage.app",
    messagingSenderId: "939176008582",
    appId: "1:939176008582:web:268270488e511e2c102a07"
};

const app = initializeApp(firebaseConfig); 
const db = getDatabase(app); 
 
export { db, ref, set, push, onValue, remove, update }; 