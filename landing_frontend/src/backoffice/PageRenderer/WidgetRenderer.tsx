import React, { DetailedHTMLProps, HTMLAttributes } from "react";


export const WIDGET_IDS = {
    classic_div: ({text,styleContent}:DivType) => <div style={styleContent}>{text}</div>,
    classic_h1: ({})=> <h1>Title</h1>
}
export function WidgetRenderer({ widgetId, widgetProps }: WidgetRendererProps) {
    return WIDGET_IDS[widgetId](widgetProps)
}

type WidgetRendererProps = {
    widgetId : keyof typeof WIDGET_IDS,
    widgetProps: any
}

type DivType = {
    text:string
    styleContent: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
}