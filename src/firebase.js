import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB50Av2rC5jV0GCafpncazlxfaOTF4Qi9M",
  authDomain: "todo-react-9e69c.firebaseapp.com",
  projectId: "todo-react-9e69c",
  storageBucket: "todo-react-9e69c.firebasestorage.app",
  messagingSenderId: "371210851518",
  appId: "1:371210851518:web:224ad3e8d0db4fbb017aef"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {db, auth, provider};
