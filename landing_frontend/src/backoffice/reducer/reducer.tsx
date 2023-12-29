export function LayoutReducer(layout: any, action: any) {
    switch (action.type) {
        case "ADD_LAYOUT":
            return [
                ...(layout.length > 0 ? layout : []),
                {
                    ...action.layout,
                    order:layout.length +1
                }
                            ]
        case "ADD_WIDGET_TO_LAYOUT":
            const new_layout = layout.filter((lay: any) => (lay.config.divisions.some((division: any) => (division.id === action.id))))[0]
            return [
                ...layout.filter((lay: any) => (lay.config.divisions.every((division: any) => (division.id !== action.id)))),

                {
                    ...new_layout,
                    config: {
                        ...new_layout.config,
                        divisions: [
                            ...new_layout.config.divisions.filter((item: any) => (item.id !== action.id)),
                            {
                                ...new_layout.config.divisions.filter((item: any) => (item.id === action.id))[0],
                                widget_id: action.widget_id
                            }
                        ]
                    }

                }



            ]
    }

    return { ...layout }
}

export function PageReducer(page: any, action: any) {
    switch (action.type) {
        case "OPEN_MODAL":
            return {
                ...page,
                coord:{
                    x:action.coord.x,
                    y:action.coord.y,
                },
                isWidgetModalOpen: true
            }
        case "CLOSE_MODAL":
            return {
                ...page,
                isWidgetModalOpen: false
            }
    }
}

export function WidgetReducer(widget: any, action: any) {
    switch (action.type) {
        case "ADD_WIDGET":
            return [
                ...widget,
                action.widget
            ]
    }
    return [...widget]
}

export function SelectedLayoutReducer(blocks: any, action: any) {
    switch (action.type) {
        case 'SELECT_LAYOUT':
            return {
                ...blocks,
                id: action.selected_layout
            }
    }
}
