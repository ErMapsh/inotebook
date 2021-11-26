import NoteContext from "./NoteContext";//create and import NoteContext
import { useState } from "react";

const NoteState = (props)=>{
    const [set, setset] = useState({"name": "adi", age: 18})//setting up state

    const update = ()=>{
            setTimeout(() => {
                setset({"name": "ermapsh", "age":21 })
                
            }, 3000);
    }

    return(
        <NoteContext.Provider value={{set, update}}>
             {props.children} {/*Essentially, props.children is a special prop, automatically passed to every component */}
        </NoteContext.Provider>
    )
}

export default NoteState;

