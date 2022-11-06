import React from 'react'
const Alert=({variant})=>{
    return(
        <div className="alert alert-danger" role="alert">
            {variant}
        </div>
    )
}
export default Alert