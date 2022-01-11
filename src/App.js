import Cart from './component/Cart'

import Products from './component/Products'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG7zhioDSDcxLlxPOi0JGTD_PDdFtpIbw",
  authDomain: "mycart-34834.firebaseapp.com",
  projectId: "mycart-34834",
  storageBucket: "mycart-34834.appspot.com",
  messagingSenderId: "622469576272",
  appId: "1:622469576272:web:b4988581886100fb2c8355",
  measurementId: "G-H1BT3LPP4L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function App() {
  return (
    <div className="main_content">
      <Products/>
      <Cart/>
    </div>
  );
}

export default App;
