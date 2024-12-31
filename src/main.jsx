import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './header/Header';
import Footer from './mainfooter/Footer';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(  
    <App/>
  
)
