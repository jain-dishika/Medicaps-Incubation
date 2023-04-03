import React, { useState } from 'react'
import "./newhero.css"
import Herobulb from './Herobulb'

export default function NewHerosection() {
    const [bulb, setbulb] = useState(false);
  return (
    <div  className='new-hero' onMouseEnter={()=>setbulb(true)} onMouseLeave={()=>setbulb(false)} >
        <div>
        <div id="container">
        Medi-Caps
        <div id="flip">
            <div><div>Innovation</div></div>
            <div><div>Incubation</div></div>
            <div><div>Center</div></div>
        </div>

        </div>
        <div style={{textAlign:"center"}}>
        <h2>"Unlock your business potential"</h2>
        </div>
        </div>
        <div>
            {/* <img src='' alt='MII Hero'/> */}
            <Herobulb bulb={bulb}/>
        </div>
    </div>
  )
}
