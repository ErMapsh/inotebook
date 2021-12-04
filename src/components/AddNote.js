import React, {useContext, useState} from 'react'
import NoteContext from '../context/notes/NoteContext'

export default function AddNote() {
    const context = useContext(NoteContext)
    const {addNote} = context;
    const [noteinfo, setnoteinfo] = useState({title:"", description:"", tag:"default"})

    const submitNote =(e)=>{
        //this function will encounter while when user want to add a Note
        e.preventDefault();// submit button click nahi hoga, mostly this used in checkbox button
        addNote(noteinfo.title, noteinfo.description, noteinfo.tag)
    }

    const onChange=(event)=>{
        // this function will encounter while 
        setnoteinfo({...noteinfo, [event.target.name]: event.target.value })//here ...note is jo value note ke hai vo rahane de na aur jo change hoga means when event occur on that thing tabh value  assign kr dena us thing ko means title name ka event occur huva hai to {title: jo event occur ho raha hai vo}
        // console.log(noteinfo)
    }


    return (
        <div>
            <h2>Add a Note</h2>
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
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" onChange={onChange}/>
                </div>
            </form>
            <button type="submit" className="btn btn-primary" onClick={submitNote}>Add Note</button>
            
            <h2 className="m-3">Your Notes</h2>
        </div>
    )
}
