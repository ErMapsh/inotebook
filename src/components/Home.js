import React from 'react'
import { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext';

export default function Home() {
    const context = useContext(NoteContext);
    const {notes, setnotes} = context;

    return (
        <div className="container  ">
            <h2>Add a note</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <h2>Your Notes</h2>
            {notes.map((note)=>{
                return note.title
            })}
        </div>
    )
}
