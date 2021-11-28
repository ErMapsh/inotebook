import NoteContext from "./NoteContext";//create and import NoteContext
import { useState } from "react";

const NoteState = (props) => {
    // const [set, setset] = useState({"name": "adi", age: 18})//setting up state

    // const update = ()=>{
    //         setTimeout(() => {
    //             setset({"name": "ermapsh", "age":21 })

    //         }, 3000);
    // }

    const noteinitial = [{
        "_id": "619d994c24b4024021bacf15e1",
        "user": "619cf7f3e0cbd3041f869d6a",
        "title": "mytitle",
        "description": "this is my fucking sick",
        "tag": "personal",
        "date": "2021-11-24T01:45:48.020Z",
        "__v": 0
    },
    {
        "_id": "619d994c2b44213024021bacf15e2",
        "user": "619cf7f3e0cbd3041f869d6a",
        "title": "mytitle",
        "description": "this is my fucking sick",
        "tag": "personal",
        "date": "2021-11-24T01:45:48.020Z",
        "__v": 0
    },{
        "_id": "619d994c2b402454021bacf15e43",
        "user": "619cf7f3e0cbd3041f869d6a",
        "title": "mytitle",
        "description": "this is my fucking sick",
        "tag": "personal",
        "date": "2021-11-24T01:45:48.020Z",
        "__v": 0
    },{
        "_id": "6149d994c2b4024313021bacf15e4",
        "user": "619cf7f3e0cbd3041f869d6a",
        "title": "mytitle",
        "description": "this is my fucking sick",
        "tag": "personal",
        "date": "2021-11-24T01:45:48.020Z",
        "__v": 0
    },
    {
        "_id": "614a10def35f618ee7101757a5",
        "user": "619cf7f3e0cbd3041f869d6a",
        "title": "mytitle",
        "description": "this is my fucking sick",
        "tag": "personal",
        "date": "2021-11-26T16:40:15.296Z",
        "__v": 0
    }]
    const [notes, setNotes] = useState(noteinitial)

    //Add a Note
    const addNote = (title, description, tag)=>{
        let note = {
            "_id": "619d3242994c2b44024021bacf15e2",
            "user": "619cf7f3e0cbd3041f869d6a",
            "title": title,
            "description": description,
            "tag": "personal",
            "date": "2021-11-24T01:45:48.020Z",
            "__v": 0
        };//after api call is done

        setNotes(notes.concat(note));
        console.log("adding a note")
    }

    //Delete a Note
    const delNote = (id)=>{
        console.log(`delecting a note with ${id}`)
        let newnotes = notes.filter((note)=>{ return note._id !== id})
        setNotes(newnotes)
    }

    //Update or Edit a Note
    const upNote = (id, title, description, tag)=>{
        console.log("editing on")
    }
    return (
        <NoteContext.Provider value={{notes, addNote, delNote, upNote}}>
            {props.children} {/*Essentially, props.children is a special prop, automatically passed to every component */}
        </NoteContext.Provider>
    )
}

export default NoteState;

