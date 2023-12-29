import React, { useContext } from "react";
import useWidgetDialog from "../widgetModal/WidgetDialog";
import { PageContext } from "../../context/PageContext";
import { WidgetRenderer } from "../WidgetRenderer";
import { WidgetContext } from "../../context/WidgetContext";
// import { WidgetRenderer } from "../WidgetRenderer";

export default function SingleLayout({ isPreview, division }: SingleLayoutType) {
    const { show, hide ,selectLayout} = useWidgetDialog(division.id)
    const page = useContext(PageContext)
    const widget = useContext(WidgetContext)

    const handleAddWidget = (id: string, e: any) => {
        if (page.isWidgetModalOpen) {
            hide()
        } else {
            show(e.pageX,e.pageY)
            selectLayout()
        }
    }


    return <>
    <div className={isPreview ? "preview div-layout" : "div-layout"} key={division.id} onClick={(e) => { handleAddWidget(division.id, e) }}>
        {division.widget_id && <WidgetRenderer widgetId={widget.filter(wid=>wid.id===division.widget_id)[0].type} widgetProps={{text:"this a test for"}}></WidgetRenderer>}
    </div>
    </>
}

type SingleLayoutType = {
    isPreview: boolean,
    division: {
        id: string,
        widget_id: string,
    }
}