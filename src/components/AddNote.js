import React ,{useContext, useState} from 'react'
import NoteContext from '../context/notes/NoteContext'

export default function AddNote() {
    const context = useContext(NoteContext)
    const {addNote} = context;
    const [noteinfo, setnoteinfo] = useState({title:"", description:"", tag:"default"})

    const handleonsubmit =()=>{
        addNote(noteinfo.title, noteinfo.description, noteinfo.tag)
    }
    const onChange=(event)=>{
        console.log("onchange function")
        event.preventDefault();
        setnoteinfo({...noteinfo, [event.target.name]: event.target.value })//here ...note is jo value note ke hai vo rahane de na aur jo change hoga means when event occur on that thing tabh value  assign kr dena us thing ko means title name ka event occur huva hai to {title: jo event occur ho raha hai vo}
    }
    return (
        <div>
            <h2>Add a note</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange}/>
                    <div id="emailHelp" className="form-text">Title must having 6 Letters</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" onChange={onChange}/>
                </div>
            </form>
            <button type="submit" className="btn btn-primary" onClick={handleonsubmit}>Add Note</button>
            <h2>Your Notes</h2>
        </div>
    )
}
