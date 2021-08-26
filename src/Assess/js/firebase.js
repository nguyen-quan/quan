import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBmgL1ub10ppTFIDNGdAPHMmjkkAZVuP3o",
    authDomain: "shopee1-4d960.firebaseapp.com",
    databaseURL: "https://shopee-4d960-default-rtdb.firebaseio.com",
    projectId: "shopee1-4d960",
    storageBucket: "shopee1-4d960.appspot.com",
    messagingSenderId: "947834750467",
    appId: "1:947834750467:web:627825c6189ecab2af7036"
};
const fireDB = firebase.initializeApp(firebaseConfig);
export default fireDB