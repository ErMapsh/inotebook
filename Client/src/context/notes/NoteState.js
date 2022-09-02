import NoteContext from "./NoteContext";//create and import NoteContext
import { useState } from "react";


const NoteState = (props) => {
    //need to setup
    const host = "http://localhost:5000";
    const noteinitial = []
    const [notes, setNotes] = useState(noteinitial)
    const [alert, setalert] = useState(null)

    //for first later uppercase
    const UP = (word) => {
        return word.slice(0, 1).toUpperCase() + word.slice(1);
    };
    //setting alerts
    const showAlert = (message, type) => {
        setalert({ message: message, type: type })
        setTimeout(() => {
            setalert(null)
        }, 2000)
    }

    //gets all notes
    const getNotes = async () => {
        //api call in backend
        const response = await fetch(`${host}/api/notes/fetchallnotes/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem("auth-token")
            },
        });
        const json = await response.json();
        setNotes(json.usernotes)
    }

    //Add a Note : we need to just add note in database after that getnotes automatically render new notes
    const addNote = async (title, description, tag) => {
        //Api call at backend
        try {

            const response = await fetch(`${host}/api/notes/addnote`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem("auth-token")
                },
                body: JSON.stringify({ title, description, tag })//convert js to json
            });
            const json = await response.json();//here is response that will show u addnote info
            // console.log(json.data)
            // showAlert(json.msg, "success")

            let note = {
                "_id": json.data._id,
                "user": json.data.user,
                "title": title,
                "description": description,
                "tag": tag,
                "date": json.data.date,
                "__v": 0
            };//after api call is done
            setNotes(notes.concat(note))
            showAlert(json.msg, "success")
            getNotes()
            // console.log("adding a note")
        }
        catch (e) {
            showAlert("Internal Error Occur", "danger")
        }
    }

    //Delete a Note 
    const delNote = async (noteid) => {
        try {
            // console.log(`delecting a note with ${noteid}`)
            //Api call 
            const response = await fetch(`${host}/api/notes/deletenote/${noteid}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem("auth-token")
                },
            });
            const json = await response.json()
            // console.log(json)
            showAlert(json.msg, "success")
            getNotes()
        } catch (e) {   
            showAlert("Internal Error Occur", "danger")
        }
    }

    //Update or Edit a Note
    const upNote = async (noteid, title, description, tag) => {
        /* eslint-disable */
        try {

            //Api call 
            const response = await fetch(`${host}/api/notes/updatenote/${noteid}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem("auth-token")
                },
                body: JSON.stringify({ title, description, tag })
            });

            const json = await response.json();
            // console.log(json)
            getNotes()
            showAlert(json.msg, "success")
        } catch (e) {
            console.log(e)
        }

    }

    return (
        <NoteContext.Provider value={{ notes, setNotes, getNotes, addNote, delNote, upNote, alert, showAlert, UP }}>
            {props.children} {/*Essentially, props.children is a special prop, automatically passed to every component */}
        </NoteContext.Provider>
    )
}

export default NoteState;

