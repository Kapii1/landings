import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import PageRenderer from "./PageRenderer/PageRenderer";
import './Backoffice.css'
export function Backoffice(){
    return <div className="landings-backoffice">
            <Sidebar/>
            <PageRenderer isPreview />
        </div>
}