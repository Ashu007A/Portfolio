import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Weather.css'

export default function Weather() {
  const [sdata,setSdata] = useState([])
  const [ word, setWord] = useState('pune')
  const [loading, setLoading] = useState(false)

  const alpha = async()=>{
    try{
      setLoading(true)
    const beta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${word}&units=metric&APPID=2c954d13cd9c84f882e1bb08a97c13b2`)
    setSdata(beta.data);
    setLoading(false)
    }catch(error){
      console.log(error)
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alpha();
    }
  
}

  useEffect(() => {
   alpha();
  }, [])
  console.log(sdata)
  return (
    <div className='wethCont'>
      {/* SerchBar */}
      <div className='search'>
        <input type="text" onKeyDown={handleKeyDown} onChange={(e)=>{setWord(e.target.value)}} placeholder='Search...' ></input><ion-icon onClick={()=>alpha()}  name="search"></ion-icon>
      </div>
      {/* outputs */}
      <div className='output2'>
      {loading?<h1 className='loading'>
      <div className="lds-facebook"><div></div><div></div><div></div></div>
      </h1>:sdata.main && (
        <div className='fullbox'>
        <div className='sec1'>
          <div className='icon1'><ion-icon style={{color:'#ea4335'}} name="location-outline"></ion-icon>{sdata.name}</div>
          <div className='label'> <img style={{height:70 , width:70}} src={`http://openweathermap.org/img/w/${sdata.weather[0].icon}.png`}/>{sdata.main.temp} °C</div>
        </div>
        <div className='sec2'>
          <div className='box'>
            <div className='icon2' style={{color:'red'}}><ion-icon name="thermometer"></ion-icon></div>
            <div className='label2'>{sdata.main.temp_max}°C</div>
            <div className='label3'>MAX TEMP</div>
          </div>
          <div className='box'>
            <div className='icon2' style={{color:'#cbf1fa'}}><ion-icon name="snow"></ion-icon></div>
            <div className='label2'>{sdata.main.temp_min}°C</div>
            <div className='label3'>MIN TEMP</div>
          </div>
          <div className='box'>
            <div className='icon2' style={{color:'#8eb2dc'}}><ion-icon name="cloud"></ion-icon></div>
            <div className='label2' style={{fontSize:15}}>{sdata.weather[0].description.toUpperCase()}</div>
            <div className='label3'>WEATHER</div>
          </div>
          <div className='box'>
            <div className='icon2' style={{color:' #afeeee'}}><ion-icon name="water"></ion-icon></div>
            <div className='label2'>{sdata.main.humidity}%</div>
            <div className='label3'>HUMIDITY</div>
          </div>
          <div className='box'>
            <div className='icon2' style={{color:'#dbb64f'}}><ion-icon name="eye"></ion-icon></div>
            <div className='label2'>{sdata.visibility/100}%</div>
            <div className='label3'>VISIBILITY</div>
          </div>
          <div className='box'>
            <div className='icon2' style={{color:'#faa0bf'}}><ion-icon name="accessibility"></ion-icon></div>
            <div className='label2'>{sdata.main.feels_like}°C</div>
            <div className='label3'>FEELS LIKE</div>
          </div>
          

         
        </div>
        </div>
      )}
        
      </div>
    </div>
  )
}
