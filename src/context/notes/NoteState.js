import NoteContext from "./NoteContext";//create and import NoteContext
import { useState } from "react";

const NoteState = (props) => {
    //need to setup
    const host = "http://localhost:5000";
    const noteinitial = []
    const [notes, setNotes] = useState(noteinitial)
    

    //gets all notes
    const getNotes = async ()=>{
        const response = await fetch(`${host}/api/notes/fetchallnotes/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFhNjQ2MGJjZDczMzBhMDRiZjkzYTBmIn0sImlhdCI6MTYzODI4Njg4OH0.6Fuvtgm0mC6nqYQGQ13md_7lfL8wg613iWWlJMlqepo"
            },
        });
        const json = await response.json();
        // console.log(json)
        setNotes(json.usernotes)
    }



    //Add a Note : we need to just add note in database after that getnotes automatically render new notes
    const addNote = async (title, description, tag) => {
        //Api call 
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFhNjQ2MGJjZDczMzBhMDRiZjkzYTBmIn0sImlhdCI6MTYzODI4Njg4OH0.6Fuvtgm0mC6nqYQGQ13md_7lfL8wg613iWWlJMlqepo"
            },
            body: JSON.stringify({ title, description, tag })//convert js to json
        });
        const json = await response.json();//here is response that will show u addnote info
        // console.log(json.data._id)

        let note = {
            "_id": json.data._id,
            "user": json.data.user,
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2021-11-24T01:45:48.020Z",
            "__v": 0
        };//after api call is done

        setNotes(notes.concat(note))
        console.log("adding a note")
    }



    //Delete a Note 
    const delNote = async (noteid) => {
        console.log(`delecting a note with ${noteid}`)
        //Api call 
        const response = await fetch(`${host}/api/notes/deletenote/${noteid}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFhNjQ2MGJjZDczMzBhMDRiZjkzYTBmIn0sImlhdCI6MTYzODI4Njg4OH0.6Fuvtgm0mC6nqYQGQ13md_7lfL8wg613iWWlJMlqepo"
            },
        });
        console.log(response)
        getNotes()
    }



    //Update or Edit a Note
    const upNote = async (noteid, title, description, tag) => {
        /* eslint-disable */
        console.log("Updating/Editing on");
        //Api call 
        const response = await fetch(`${host}/api/notes/updatenote/${noteid}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFhNjQ2MGJjZDczMzBhMDRiZjkzYTBmIn0sImlhdCI6MTYzODI4Njg4OH0.6Fuvtgm0mC6nqYQGQ13md_7lfL8wg613iWWlJMlqepo"
            },
            body: JSON.stringify({ title, description, tag })
        });

        const json = response.json();
        console.log(json)

        //Logic for Updating Note
        for (let index = 0; index < notes.length; index++) {
            let element = notes[index];
            if (element._id === id) {
                element.title = title,
                    element.description = description,
                    element.tag = tag
            }
        }
    
    }
    return (
        <NoteContext.Provider value={{ notes, addNote, delNote, upNote, getNotes, setNotes }}>
            {props.children} {/*Essentially, props.children is a special prop, automatically passed to every component */}
        </NoteContext.Provider>
    )
}

export default NoteState;

