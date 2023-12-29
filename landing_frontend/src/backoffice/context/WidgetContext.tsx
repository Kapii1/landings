
import React from "react";
import { WIDGET_IDS } from "../PageRenderer/WidgetRenderer";


export const WidgetContext = React.createContext<WidgetType[]>([]);

export const WidgetDispatchContext = React.createContext<React.Dispatch<any>>(()=>null);

type WidgetType = {
    id: string,
    type: keyof typeof WIDGET_IDS,
    style: string,
    params:ClassicDivType
}

type ClassicDivType = {
    text: string,
}