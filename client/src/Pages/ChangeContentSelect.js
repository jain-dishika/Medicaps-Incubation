import React, { useState } from "react";
import ComponantA from "./ComponantA";
import ComponantB from "./ComponantB";
import ComponantC from "./ComponantC";
import ComponantNone from "./ComponantNone";

function ChangeComponantSelect(){
    const [selected,setSelected]=useState('None Componant')

    const handleChange=(e)=>{
        console.log(e.target.value)
        setSelected(e.target.value)
    }

    return(
        <div>
            <select className="Space" value={selected} onChange={(e)=>handleChange(e)}>
                <option>None</option>
                <option>First Componant</option>
                <option>Second Componant</option>
                <option>Third Componant</option>
            </select>
            {selected == "None Componant"?<ComponantNone/>:"" }
            {selected == "First Componant"?<ComponantA/>:"" }
            {selected == "Second Componant"?<ComponantB/>:"" }
            {selected == "Third Componant"?<ComponantC/>:"" }
        </div>
    );
}
export default ChangeComponantSelect;