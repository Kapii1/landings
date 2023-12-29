
import React from "react";


export const SelectedLayoutContext = React.createContext<SelectedLayoutType[]>([]);

export const SelectedLayoutDispatchContext = React.createContext<React.Dispatch<any>>(()=>null);

type SelectedLayoutType = {
    id: string,
}