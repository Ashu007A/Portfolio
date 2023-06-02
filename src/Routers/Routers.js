import React from 'react'
import {BrowserRouter as Router , Routes , Route , Link} from "react-router-dom"
import Dictionary from '../Component/Dictionary/Dictionary'

import Context from '../Component/Shopping/Context/Context'

import Weather from '../Component/Weather/Weather'


export default function Routers() {
  return (
    <div style={{display:"flex"}}>
     <Routes>
        <Route path='/' element={<Dictionary/>}/>
        <Route path='/weather' element={<Weather/>}/>
        <Route path='/shopping' element={<Context/>}/>
        
        
      </Routes>
    </div>
       

  )
}

