
import React from "react";


export const LayoutContext = React.createContext<LayoutType[]>([]);

export const LayoutDispatchContext = React.createContext<React.Dispatch<any>>(()=>null);

type LayoutType = {
    id: string,
    style: string,
    order:number,
    config:{
        divisions: DivisionType[],
        height:number
    }
}

type DivisionType = {
    order:number,
    id: string,
    widget_id:string
}