import NavContext from "./NavContext";
// import { useState } from "react";
 
let id= "iNotebook"

const NavState = (props)=>{

    return(
        <NavContext.Provider value={id}>
            {props.children}
        </NavContext.Provider>
    )
}

export default NavState;