import React from 'react'
import {useFormFields} from './contact.hooks'

const Contact = ()=>{
    const [fields,handleFieldChange] = useFormFields({username:'',password:''})
    return(
        <div>
            <label htmlFor="username"></label>
            <input type="text" name="username" id="username" value={fields.username} onChange={handleFieldChange}/>
            <label htmlFor="password"></label>
            <input type="text" name="password" id="password" value={fields.password} onChange={handleFieldChange}/>
        </div>
    )
}

export default Contact