import React from 'react'

const TextInput = ({handleChange,title,value})=>{
    return(
        <div>
            <h2>{title}</h2>
            <input type="text"  value={value} onChange={handleChange}/>
        </div>
    )
}



export default TextInput