import React, { useContext } from "react";
import './WidgetModal.css'
import { WIDGET_IDS } from "../WidgetRenderer";
import useWidgetDialog from "./WidgetDialog";
import { PageContext } from "../../context/PageContext";
export function WidgetModal({layoutId}:WidgetModalProps){
    const {addWidget} = useWidgetDialog(layoutId)
    const page = useContext(PageContext)
    console.log(page.coord.y)
    return <div className="landing-widget-modal" style={{left:page.coord.x,top:page.coord.y}}>
                {Object.keys(WIDGET_IDS).map((key:string)=>{
                    const handleClick = ()=>{
                        addWidget(key,{text:"test",style:''})
                    }
                    return <button onClick={handleClick}>{key}</button>
                })}
            </div>
}

type WidgetModalProps = {
    layoutId: string
}