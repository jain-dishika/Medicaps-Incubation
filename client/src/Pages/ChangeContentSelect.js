import React, { useState } from "react";
import ComponantA from "./ComponantA";
import ComponantB from "./ComponantB";
import ComponantC from "./ComponantC";
import ComponantNone from "./ComponantNone";    
import ComponantD from "./ComponantD";

function ChangeComponantSelect(){
    const [selected,setSelected]=useState('None')

    const handleChange=(e)=>{
        console.log(e.target.value)
        setSelected(e.target.value)
    }

    return(
        <div className="mainbucket">
            <div className="tag">
            <h1>Contact-us</h1>
            </div>
            <div className="dropdown">
            <label htmlFor="subject" className="subject">why are you here for : </label>
            <select className="Space" value={selected} onChange={(e)=>handleChange(e)}>
                <option>None</option>
                <option>General Query</option>
                <option>Idea Owner</option>
                <option>StartUp Founder</option>
                <option>Be a Investor</option>
            </select>
            {selected == "None"?<ComponantD/>:"" }
            {selected == "General Query"?<ComponantNone/>:"" }
            {selected == "Idea Owner"?<ComponantA/>:"" }
            {selected == "StartUp Founder"?<ComponantB/>:"" }
            {selected == "Be a Investor"?<ComponantC/>:"" }
        </div>



        </div>
    );
}
export default ChangeComponantSelect;