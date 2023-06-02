import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Dict.css'

export default function Dictionary() {
  const [sdata,setSdata] = useState([])
  const [ word, setWord] = useState('Hello')
  const [loading, setLoading] = useState(false)
  const [x , setX] = useState(0)
  const [i,setI] = useState(0)
  
  var audio = sdata[0] && new Audio(
    sdata[0].phonetics[0].audio
  );
  
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alpha();
    }
  
}
  const alpha = async()=>{
    try{
      setLoading(true)
    const beta = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    setSdata(beta.data);
    setLoading(false)
    }catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
   alpha();
  }, [])
  
  
  return (
    <div className='dictCont'>
    {/* SerchBar */}
      <div className='search'>
        <input type="text" onKeyDown={handleKeyDown} placeholder='Search...' onChange={(e)=>{setWord(e.target.value)}}></input><ion-icon onClick={()=>alpha()} name="search"></ion-icon>
      </div>
    {/* outputs */}
   
    <div className='output'>
    {loading?<h1 className='loading'>
    <div className="lds-facebook"><div></div><div></div><div></div></div>
    </h1>:sdata[0] &&  (<div>
      <div className='heading'><div className='word'>{sdata[0].word}</div><div className='speaker' onClick={()=>audio.play()}>{sdata[0].phonetics[0].audio?<ion-icon name="volume-high" ></ion-icon>:<div id='redAudio'><ion-icon name="volume-mute"></ion-icon></div>}</div></div>
      <div className='type'>{sdata[0].meanings[0].partOfSpeech}</div>
      <div className='mean'>Meaning :-</div>
    <div className='meanO'>{sdata[0].meanings[0].definitions[0].definition}</div>
    <div className='mean'>Example :-</div>
    <div className='meanO'>{sdata[0].meanings[0].definitions[0].example}</div>
   
    {/* <div className='directions'><div><ion-icon name="arrow-back-circle"></ion-icon></div><div  onClick={x!=i?()=>setI(i+1):null}><ion-icon name="arrow-forward-circle"></ion-icon></div></div> */}
   
    </div>
      )}
    </div>
    </div>
  )
}
