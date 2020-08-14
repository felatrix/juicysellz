import {useState} from 'react'

export const useInput = (initialValue) =>{
    const [emailPass2,setEmailPass2] = useState(initialValue)
    return{
        emailPass2,
        setEmailPass2,
        reset:()=>emailPass2({first_name:'',last_name:'',displayName:'',email:'',password:'',confirm_password:''}),
        bind:{
            emailPass2,
            onChange: event =>{
                const emailPassCopy = {...emailPass2}
                const name = event.target.name
                emailPassCopy[name] = event.target.value
                setEmailPass2(emailPassCopy)
            }
        }
    }
}

