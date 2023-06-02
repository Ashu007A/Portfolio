import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import {BrowserRouter as Router , Routes , Route , Link} from "react-router-dom"


export default function Sidebar() {
    const [stat , setStat] = useState('dict')
    const [toggle ,setToggle] = useState(false)
    const[toggleIcon,setToggleIcon]  =useState('menu-outline')
    const[navState , setNavestate] = useState('navigation')

const change = (data) =>{
    setStat(data)
}
const toggleChange = ()=>{
    setToggle(!toggle);
    toggle?setToggleIcon('close-outline'):setToggleIcon('menu-outline');
    toggle?setNavestate('navigation active'):setNavestate('navigation')
}
  return (
    <div>
      <div className="body">
      <div className={navState}>
      {/* <img src={require('./logo.png')}/> */}
        <ul>
        <li onClick={()=>change('dict')} className={stat=='dict'?'list active':'list'}>
          <b></b>
          <b></b>
            <Link to='/'>
              <span className="icon">
                <ion-icon name="book-outline"></ion-icon>
              </span>
              <span className="title">Dictionary</span>
            </Link>
          </li>
          <li onClick={()=>change('weather')} className={stat=='weather'?'list active':'list'}>
          <b></b>
          <b></b>
            <Link to='/weather'>
              <span className="icon">
              <ion-icon name="thunderstorm-outline"></ion-icon>
              </span>
              <span className="title">Weather</span>
            </Link>
          </li>
          <li onClick={()=>change('shop')} className={stat=='shop'?'list active':'list'}>
          <b></b>
          <b></b>
          <Link to='/shopping'>
              <span className="icon">
              <ion-icon name="cart-outline"></ion-icon>
              </span>
              <span className="title">Shopping</span>
            </Link>
          </li>
          <li onClick={()=>change('setting')} className={stat=='setting'?'list active':'list'}>
          <b></b>
          <b></b>
            <a href="#">
              <span className="icon">
                <ion-icon name="settings-outline"></ion-icon>
              </span>
              <span className="title">Setting</span>
            </a>
          </li>
          <li onClick={()=>change('help')} className={stat=='help'?'list active':'list'}>
          <b></b>
          <b></b>
            <a href="#">
              <span className="icon">
                <ion-icon name="help-outline"></ion-icon>
              </span>
              <span className="title">Help</span>
            </a>
          </li>
          <li onClick={()=>change('password')} className={stat=='password'?'list active':'list'}>
          <b></b>
          <b></b>
            <a href="#">
              <span className="icon">
                <ion-icon name="lock-closed-outline"></ion-icon>
              </span>
              <span className="title">Password</span>
            </a>
          </li>
          <li onClick={()=>change('sign')} className={stat=='sign'?'list active':'list'}>
          <b></b>
          <b></b>
            <a href="#">
              <span className="icon">
                <ion-icon name="log-out-outline"></ion-icon>
              </span>
              <span className="title">SignOut</span>
            </a>
          </li>
        </ul>
      </div>
      <div onClick={toggleChange} className="toggle">
      <ion-icon name={toggleIcon}></ion-icon>
      </div>
      
    </div>
    </div>
  );
}
