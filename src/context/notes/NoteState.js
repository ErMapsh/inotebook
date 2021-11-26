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
        "_id": "619d994c2b4024021bacf15e",
        "user": "619cf7f3e0cbd3041f869d6a",
        "title": "mytitle",
        "description": "this is my fucking sick",
        "tag": "personal",
        "date": "2021-11-24T01:45:48.020Z",
        "__v": 0
    },
    {
        "_id": "61a10def35f618ee7101757a",
        "user": "619cf7f3e0cbd3041f869d6a",
        "title": "mytitle",
        "description": "this is my fucking sick",
        "tag": "personal",
        "date": "2021-11-26T16:40:15.296Z",
        "__v": 0
    }]
    const [notes, setnotes] = useState(noteinitial)
    return (
        <NoteContext.Provider value={{notes, setnotes}}>
            {props.children} {/*Essentially, props.children is a special prop, automatically passed to every component */}
        </NoteContext.Provider>
    )
}

export default NoteState;

