import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext';

export default function NoteItem(props) {
    const { note } = props;
    const context = useContext(NoteContext);
    const {upNote, delNote} = context;
    upNote();
    return (
        <div className="col md-3">
            <div className="card my-3 p-1 rounded">
                <div className="card-body">
                    <p className="">On: {note.date}</p>
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fas fa-trash-alt mx-1" onClick={()=>{delNote(note._id)}}></i>
                    <i className="fas fa-edit mx-2" onClick={ } ></i>
                </div>
            </div>
        </div>
    )
}
