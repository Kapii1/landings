import React, { useContext, useState } from "react";
import { LayoutDispatchContext } from "../../context/LayoutContext";
import { generateRandomId } from "../../utils";

export default function LayoutHandler(){
    const dispatch = useContext(LayoutDispatchContext)
    const [divisionsNumber,setDivisionsNumber] = useState(1)
    const [height,setHeight] = useState(100)

    const handleAddLayout = ()=>{
        dispatch({
            type:'ADD_LAYOUT',
            layout:{
                id: generateRandomId(15),
                style: "",
                config:{
                    divisions: Array.from({length:divisionsNumber},(_, i)=>({id:generateRandomId(),widget_id:'',order:i})),
                    height:height
                }
            }
        })
    }
    const handleDivisionChange = (e:any) =>{
        setDivisionsNumber(e.target.value)
    }
    const handleHeightChange = (e:any) =>{
        setHeight(e.target.value)
    }
    return <div>
                <input type="number" value={divisionsNumber} onChange={handleDivisionChange}></input>
                <input type="number" value={height} onChange={handleHeightChange}></input>

                <button onClick={handleAddLayout}>add layout</button>
            </div>
}