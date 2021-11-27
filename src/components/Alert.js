import React from 'react'

export default function Alert(props) {
    return (
        <div style={{height: "50px", marginTop: "50px"}}>
            <div className="alert alert-primary text-center" role="alert">
                A simple success alert—check it out!
                {/* {props.message} */}
            </div>
        </div>
    )
}
