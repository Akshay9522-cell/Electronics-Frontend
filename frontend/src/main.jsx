
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import './css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './Store.jsx'
import { Provider } from 'react-redux'




createRoot(document.getElementById('root')).render(
  
  
<BrowserRouter>
<Provider store={store}>
<App />
</Provider>


</BrowserRouter>


   
 
  
)
