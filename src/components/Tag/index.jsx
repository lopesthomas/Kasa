import React from "react"

function Tag({tag}){
    return (
        <React.StrictMode>
            <p className="tag">{tag}</p>
        </React.StrictMode>
    )
}

export default Tag