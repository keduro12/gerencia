import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCOraEu9maBqDcqXk8Wrun6hC5In2oNp2k",
  authDomain: "startcompany-a39fd.firebaseapp.com",
  projectId: "startcompany-a39fd",
  storageBucket: "startcompany-a39fd.appspot.com",
  messagingSenderId: "693256846208",
  appId: "1:693256846208:web:e958b1d555d792c88f5f65"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export {auth};