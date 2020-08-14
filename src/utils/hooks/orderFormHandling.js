import {useState} from 'react'

export const useFormField = (initialState) =>{
    const [fields,setFields] = useState(initialState)
    return[
        fields,
        function(event){
            setFields({
               ...fields,
               [event.target.id]: event.target.value 
            })
        },
        function(){
            setFields(initialState)
        }
    ]
}