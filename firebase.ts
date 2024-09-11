import { initializeApp ,getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCgLWbu7d4nyEkjgw9TurkHowBCFh69_OE",
    authDomain: "saas-2k24.firebaseapp.com",
    projectId: "saas-2k24",
    storageBucket: "saas-2k24.appspot.com",
    messagingSenderId: "115976157235",
    appId: "1:115976157235:web:55537d21656a2f14010b46",
    measurementId: "G-YHLKB9P67D"
  };
  
  const app =getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  
  const db = getFirestore(app);
  const storage = getStorage(app);
  const analytics = getAnalytics(app);

  export {db , storage, analytics};
