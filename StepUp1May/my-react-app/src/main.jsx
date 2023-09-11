import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import myStore from './Components/Redux/WithRedux/store.js'
import { Provider } from 'react-redux'

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<React.StrictMode><Provider store={myStore}><App/></Provider></React.StrictMode>)