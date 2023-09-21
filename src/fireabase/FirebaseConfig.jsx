import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDoJvalILWn6esetahpL9BGRT__B5azWvI",
  authDomain: "myfirstapp-38751.firebaseapp.com",
  projectId: "myfirstapp-38751",
  storageBucket: "myfirstapp-38751.appspot.com",
  messagingSenderId: "273202707457",
  appId: "1:273202707457:web:5724f212508b5b82f31400"
};

const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}