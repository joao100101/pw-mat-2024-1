import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import Routering from './router/Routes.jsx'
import { Link } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routering />
  </React.StrictMode>,
)
