import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./style/style.css"
import reportWebVitals from "./reportWebVitals"
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter as Router } from "react-router-dom"
import { initializeApp } from "firebase/app"
import { FirebaseOptions } from "@firebase/app-types"

const googleApiKey = process.env.REACT_APP_GOOGLE_API_KEY

const firebaseConfig: FirebaseOptions = {
  apiKey: googleApiKey,
  authDomain: "jbcnconf-web-4c5d8.firebaseapp.com",
  projectId: "jbcnconf-web-4c5d8",
  storageBucket: "jbcnconf-web-4c5d8.appspot.com",
  messagingSenderId: "1027839840720",
  appId: "1:1027839840720:web:45505d7dca6a614d87a9d5",
  measurementId: "G-X77G7GLWLE",
}
initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)

reportWebVitals()
