import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MyUserContextProvider } from './context/userContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyUserContextProvider>
      <App />
    </MyUserContextProvider>
  </React.StrictMode>,
)
