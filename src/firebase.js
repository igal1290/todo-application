import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCxG2XXCXyc4s2xfJNgSts7C9-FVeWU3To',
  authDomain: 'todo-application-c9762.firebaseapp.com',
  projectId: 'todo-application-c9762',
  storageBucket: 'todo-application-c9762.appspot.com',
  messagingSenderId: '468902322113',
  appId: '1:468902322113:web:b7a7745ba898d8cc221940',
  measurementId: 'G-YZ6RHEMR7C',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
