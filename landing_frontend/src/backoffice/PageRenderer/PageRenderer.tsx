import React, { useReducer } from "react";
import { LayoutContext, LayoutDispatchContext } from "../context/LayoutContext";
import { LayoutReducer, PageReducer, SelectedLayoutReducer, WidgetReducer } from "../reducer/reducer";
import LayoutHandler from "./Layout/LayoutHandler";
import LayoutRenderer from "./Layout/LayoutRenderer";
import './PageRenderer.css'
import { PageContext, PageDispatchContext } from "../context/PageContext";
import { WidgetModal } from "./widgetModal/WidgetModal";
import { WidgetContext, WidgetDispatchContext } from "../context/WidgetContext";
import { SelectedLayoutContext, SelectedLayoutDispatchContext } from "../context/SelectedLayoutContext";

export default function PageRenderer({ config, isPreview }: PageRendererProps) {
    const [layout, dispatch] = useReducer(LayoutReducer, []);
    const [page, page_dispatch] = useReducer(PageReducer, { isWidgetModalOpen: false })
    const [widget, widget_dispacth] = useReducer(WidgetReducer, [])
    const [blocks, select_dispatch] = useReducer(SelectedLayoutReducer, { id: "" })
    return <LayoutContext.Provider value={layout}>
        <LayoutDispatchContext.Provider value={dispatch}>
            <PageContext.Provider value={page}>
                <PageDispatchContext.Provider value={page_dispatch}>
                    <WidgetContext.Provider value={widget}>
                        <WidgetDispatchContext.Provider value={widget_dispacth}>
                            <SelectedLayoutContext.Provider value={blocks}>
                                <SelectedLayoutDispatchContext.Provider value={select_dispatch}>
                                    <div className="page-renderer">
                                        <LayoutHandler />
                                        <LayoutRenderer isPreview />

                                        {page.isWidgetModalOpen && <WidgetModal layoutId={blocks.id} ></WidgetModal>}
                                    </div>
                                </SelectedLayoutDispatchContext.Provider>
                            </SelectedLayoutContext.Provider>
                        </WidgetDispatchContext.Provider>

                    </WidgetContext.Provider>
                </PageDispatchContext.Provider>
            </PageContext.Provider>
        </LayoutDispatchContext.Provider>
    </LayoutContext.Provider>
}

type PageRendererProps = {
    config?: object,
    isPreview: boolean
}