import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./App.css"
import IsMobileProvider from './Utilities/isMobileContext.jsx'
import ErrorTracking from './Component/ErrorTracking/ErrorTracking.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ErrorTracking>

  <IsMobileProvider>
    <App />

  </IsMobileProvider>
  </ErrorTracking>
  // </React.StrictMode> 
)
