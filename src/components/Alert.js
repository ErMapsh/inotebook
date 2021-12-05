import { useContext } from "react"
import React from 'react'
import NoteContext from "../context/notes/NoteContext"

export default function Alert(props) {
    const context = useContext(NoteContext)
    const { alert } = context;
    return (
            <div style={{ height: "50px", marginTop: "50px" }}>
                <div className="alert alert-primary text-center" role="alert">
                    {alert.message}
                </div>
            </div>
    )
}
