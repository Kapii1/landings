import { useContext } from "react"
import { PageDispatchContext } from "../../context/PageContext"
import { WidgetDispatchContext } from "../../context/WidgetContext"
import { generateRandomId } from "../../utils"
import { LayoutDispatchContext } from "../../context/LayoutContext"
import { SelectedLayoutDispatchContext } from "../../context/SelectedLayoutContext"

export default function useWidgetDialog(layoutId: string) {
    const dispatch = useContext(PageDispatchContext)
    const widget_dispatch = useContext(WidgetDispatchContext)
    const layout_dispatch = useContext(LayoutDispatchContext)
    const select_dispatch = useContext(SelectedLayoutDispatchContext)
    const show = (x:number,y:number) => {
        dispatch({ type: "OPEN_MODAL" ,coord:{x:x,y:y}})
    }
    const hide = () => {
        dispatch({ type: "CLOSE_MODAL" })
    }
    const selectLayout = ()=>{
        select_dispatch({type:"SELECT_LAYOUT",selected_layout:layoutId})
    }
    const addWidget = (widgetType: any, widgetParams: any) => {
        const widgetId = generateRandomId()
        widget_dispatch({ type: 'ADD_WIDGET', widget: { id: widgetId, type: widgetType, params: widgetParams, } })
        layout_dispatch({type: "ADD_WIDGET_TO_LAYOUT",id:layoutId,widget_id:widgetId})
    }
    return { show, hide, addWidget,selectLayout }
}