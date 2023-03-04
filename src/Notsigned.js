import React from 'react'
import netflix_Name from "./image/netflix_Name.jpg"

function Notsigned({setModal}) {
  return (
    <div id="notSigned">
      <img src={netflix_Name} className='name_logo_big' />
      <div class="freeWatchContainer">
        <h1>See what's next</h1>  
        <h3>WATCH ANYTIME ANYWHERE</h3>
        <button id="freeWatchBtn" onClick={()=>setModal(true)}>WATCH FREE FOR 30 DAYS</button> 
      </div>  
    </div>
  )
}

export default Notsigned