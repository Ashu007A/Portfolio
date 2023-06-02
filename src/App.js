import React from 'react'
import {BrowserRouter as Router , Routes , Route , Link} from "react-router-dom"
import Dictionary from './Component/Dictionary/Dictionary'
import Sidebar from './Component/Sidebar/Sidebar'
import Weather from './Component/Weather/Weather'
import Routers from './Routers/Routers'
import './App.css'

export default function App() {
  return (
    <Router>
    <div className='container2'>
    <div><Sidebar/></div>
    
    <div className='content'><Routers/></div>
    
    </div>
    
    </Router>
  )
}
