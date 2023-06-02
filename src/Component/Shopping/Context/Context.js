import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import Shopping from '../Shopping';
import App from '../../../App'
import Cart from '../Cart';

const UserContext = createContext();
export const GlobalInfo = createContext()

export default function Context() {
  let arr = []
  const setter=(item)=>{
    arr.push(item)
    console.log(arr)
}

  return (
    <GlobalInfo.Provider value = { {setter:setter , arr:arr}}>
        <div>
          <Shopping/>
          
        </div>
    </GlobalInfo.Provider>
  )
}
