import { useContext } from "react"
import React from 'react'
import NoteContext from "../context/notes/NoteContext"

export default function Alert(props) {
    const context = useContext(NoteContext)
    const { alert, UP} = context;
    return (
            <div style={{ height: "50px", marginTop: "50px"}}>
                {alert && <div className={`alert alert-${alert.type} text-center`} role="alert">
                    {UP(alert.type === "danger"?"Error":alert.type)}: {alert.message}
                </div>}
            </div>
    )
}
