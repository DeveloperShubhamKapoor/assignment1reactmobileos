
import React from "react"

const OperatingSystem = ({Os,name})=>{
    return(
        <div>
            <h1>{Os}</h1>
            <ul>
                <li>{name}</li>
            </ul>
        </div>
    )
}

export {OperatingSystem}