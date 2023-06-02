import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import "./Shop.css";

import {useNavigate} from 'react-router-dom'
import { GlobalInfo } from './Context/Context';


export default function Shopping() {
  const [sdata, setSdata] = useState([]);
  const [word, setWord] = useState("Hello");
  const [loading, setLoading] = useState(false);
  const[searchTitle,setSearchTitle] = useState("")
  

  let navigate = useNavigate();
  const {setter , arr} =useContext(GlobalInfo)

  
  const alpha = async () => {
    try {
      setLoading(true);
      const beta = await axios.get(
        `https://fakestoreapi.com/products`
      );
      setSdata(beta.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const searchable=(value)=>{
    if (searchTitle === "") {
      return value;
    }
      else if (
        value.category.toLowerCase().includes(searchTitle.toLowerCase())
      ) {
        return value;
      }
      else if (
        value.title.toLowerCase().includes(searchTitle.toLowerCase())
      ) {
        return value;
      }
      
    }
  

  useEffect(() => {
    alpha();
  }, []);
 
  return (
    <div className="shopcont">
      <div className="sec11">
        <div className="vela">Logo</div>
        <div className="vela search2"><input onChange={(e)=>setSearchTitle(e.target.value)} type="text" placeholder='Search...' ></input><ion-icon  name="search"></ion-icon></div>
        <div className="vela navi"  ><ion-icon name="cart-outline"></ion-icon><span>:0</span></div>
      </div>


      <div className="sec12">
      {loading?<h1 className='loading'>
    <div className="lds-facebook"><div></div><div></div><div></div></div>
    </h1>:sdata[0] && (
        sdata.filter((value)=>searchable(value)).map((item , i)=>(
            <div className='card' key={i}>
            <div className='img1'><img src={`${item.image}`}/></div>
            <div className='des1'>
            <div className='category1'>{item.category.toUpperCase()}</div>
            <div className='title1'>{item.title}</div>
            <div className='price1'>${item.price}</div>
            </div>
            <div className='btncls'><button onClick={()=>setter(item)} className="button-36" role="button">ADD</button></div>
        </div>
        ))
    )}
      </div>
        <div>
          {arr.map((item)=>(
            console.log(item)
          ))}
        </div>
    </div>
  );
}
