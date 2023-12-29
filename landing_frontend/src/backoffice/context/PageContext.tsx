
import React from "react";


export const PageContext = React.createContext<PageType>({isWidgetModalOpen:false,coord:{x:0,y:0}});

export const PageDispatchContext = React.createContext<React.Dispatch<any>>(()=>null);

type PageType = {
    isWidgetModalOpen: boolean,
    coord: {
        x:number,
        y:number
    }
}