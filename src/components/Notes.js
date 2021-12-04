import React, { useContext, useEffect, useRef, useState} from 'react'
import NoteContext from '../context/notes/NoteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';


export default function Notes() {
    const context = useContext(NoteContext);
    const { notes, getNotes, upNote } = context;
    const [noteinfo, setnoteinfo] = useState({id:"", Etitle:"", Edescription:"", Etag:"default"})


    useEffect(() => {
        getNotes();//this is async function that get all notes form database
        // eslint-disable-next-line
    }, [])



    //for editing and updating a note 
    const ref = useRef(null);//we assign ref to specific thing
    const refClose = useRef(null);//we assign ref to specific thing

    const editNote = (currentnote) =>{//Editing a note
        // console.log("we got note info that we want to change:",currentnote._id)//we got current editing note, using modal we can change
        ref.current.click();//for opening a modal
        setnoteinfo({id:currentnote._id, Etitle: currentnote.title, Edescription: currentnote.description, Etag: currentnote.tag})
    }

    const onChange=(event)=>{
        // this function will encounter while someone editing
        setnoteinfo({...noteinfo, [event.target.name]: event.target.value })//here ...note is jo value note ke hai vo rahane de na aur jo change hoga means when event occur on that thing tabh value  assign kr dena us thing ko means title name ka event occur huva hai to {title: jo event occur ho raha hai vo}
    }

    const  UpdateNote = (e)=>{
        // console.log("Updating a note", noteinfo)
        ref.current.click()
        upNote(noteinfo.id, noteinfo.Etitle, noteinfo.Edescription, noteinfo.Etag)
    }
    return (
        <>
            <AddNote />

            {/*Button trigger modal*/}
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        {/* modal body */}
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="Etitle" name="Etitle" value={noteinfo.Etitle} aria-describedby="emailHelp" onChange={onChange} />
                                    <div id="emailHelp" className="form-text">Title must having 6 Letters</div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="Edescription" name="Edescription" value={noteinfo.Edescription} onChange={onChange}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="Etag" name="Etag" value={noteinfo.Etag} onChange={onChange}/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={refClose}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={UpdateNote}>Update changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-3">
                {notes.map((note) => {
                    return <NoteItem key={note._id} editNote={editNote} note={note} />
                })}
            </div>
        </>
    )
}
