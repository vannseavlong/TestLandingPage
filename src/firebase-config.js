import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCAF_u3fsGHgflZK0FYcdOFJf5mG7VeckE",
  authDomain: "suntel-cambodia.firebaseapp.com",
  projectId: "suntel-cambodia",
  storageBucket: "suntel-cambodia.firebasestorage.app",
  messagingSenderId: "1076053025442",
  appId: "1:1076053025442:web:05141aad0d06bc746cadfb",
  measurementId: "G-3RPD94YQCK"
};
const app = initializeApp(firebaseConfig);

let analytics = null;
isSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
  }
});

export { app, analytics };