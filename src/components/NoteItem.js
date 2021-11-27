import React from 'react'

export default function NoteItem(props) {
    const { note } = props;
    return (
        <div className="">
            <div className="card my-3 p-1 rounded">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fas fa-trash-alt mx-1"></i>
                    <i className="fas fa-edit mx-2"></i>
                </div>
            </div>
        </div>
    )
}
