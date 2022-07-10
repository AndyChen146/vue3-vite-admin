import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWtLazBZwb_K3eJiIqza3sylsmgkI3hhg",
  authDomain: "tripcan-1653896419331.firebaseapp.com",
  projectId: "tripcan-1653896419331",
  storageBucket: "tripcan-1653896419331.appspot.com",
  messagingSenderId: "17352553662",
  appId: "1:17352553662:web:d33cc3660f2502787b1aef",
  measurementId: "G-HEE0RLLQT9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;