import { createApp } from 'vue';
import App from './App.vue';
import AppHeader from './components/appHeader.vue'; // Correctly matches the file name
import AppFooter from './components/appFooter.vue'; // Correctly matches the file name

// Firebase imports
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUEAP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUEAP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUEAP_FIREBASE_APP_ID
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseKey);

// Create a Vue application
const app = createApp(App);

// Register components globally
app.component('app-header', AppHeader); // Use the variable AppHeader
app.component('app-footer', AppFooter); // Use the variable AppFooter

// Add Firebase to the global properties
app.config.globalProperties.$firebase = firebaseApp;
app.config.globalProperties.$firestore = firestore;

// Mount the Vue application
app.mount('#app');
