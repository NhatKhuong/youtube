import { initializeApp} from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth,GoogleAuthProvider } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyAUktMTui403FSnvGfLXNXsOlVr6wCLwR0",
    authDomain: "fir-e1b29.firebaseapp.com",
    projectId: "fir-e1b29",
    storageBucket: "fir-e1b29.appspot.com",
    messagingSenderId: "518465625391",
    appId: "1:518465625391:web:519b055f071719507895da"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();

  export {firebaseApp,db,auth,provider}