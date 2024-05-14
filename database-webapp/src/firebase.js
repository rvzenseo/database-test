import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB03_5OR0iIlVTeV4eG6CQU_mtnFr9ihKM",
  authDomain: "qr-database-pnpcsi.firebaseapp.com",
  projectId: "qr-database-pnpcsi",
  storageBucket: "qr-database-pnpcsi.appspot.com",
  messagingSenderId: "237275311497",
  appId: "1:237275311497:web:07805ee29c22873e83c558"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db };
