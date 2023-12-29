import React, { useContext } from "react";
import { LayoutContext } from "../../context/LayoutContext";
import './LayoutRenderer.css'
import { cssStringToObject } from "../../utils";
import SingleLayout from "./SingleLayout";
export default function LayoutRenderer({ isPreview }: LayoutRendererProps) {
    const layout = useContext(LayoutContext)
    return <div>
        {layout.sort((layoutA,layoutB)=> (layoutA.order-layoutB.order)).map((item) => {
            return <div className="one-layout" key={item.id} style={cssStringToObject(`height:${item.config.height}px`)}>
                {item.config.divisions.sort((divA,divB)=> (divA.order - divB.order)).map((division: any) => {
                    return <SingleLayout  division={division} isPreview/>
                })}
            </div>
        })}
    </div>
}

type LayoutRendererProps = {
    isPreview: boolean
}