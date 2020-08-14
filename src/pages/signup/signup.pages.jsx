import React,{useState,useEffect} from 'react'
import './getin.styles.scss'

import FormGroup from '../../components/getin/formgroup.component'
import CustomButton from '../../components/getin/custombutton.component'
import { auth,createdUserProfileDoc } from '../../utils/firebase.utils'

// import {useInput} from './signUpHooks'

const SignUp = ()=>{
    const [emailPass,setEmailPass] = useState({first_name:'',last_name:'',displayName:'',email:'',password:'',confirm_password:''})
    const [isPassFieldType,setIsPassFieldType] = useState(false)
    // const [emailPass2,reset,bind] =  useInput({first_name:'',last_name:'',displayName:'',email:'',password:'',confirm_password:''})
    // console.log(emailPass2)
    // validation
    const [lowerCase,setLowerCase] = useState({'lowerCase':false})
    const [upperCase,setUpperCase] = useState({'upperCase':false})
    const [numericCase,setNumericCase] = useState({'numericCase':false})
    const [specialCase,setSpecialCase] = useState({'specialCase':false})
    const [minChar,setMinChar] = useState({'minChar':false})


    const handleSubmit = async (e)=>{
        e.preventDefault()
        // setEmailPass({first_name:'',last_name:'',username:'',password:'',confirm_password:''})
        const {first_name,last_name,displayName,email,password,confirm_password} = emailPass
        
        if(password !== confirm_password){
            alert('password not match')
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email,password)
            await createdUserProfileDoc(user,{displayName})
            setEmailPass({first_name:'',last_name:'',displayName:'',email:'',password:'',confirm_password:''})
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e,id)=>{
        const formCopy = {...emailPass}
        const username = e.target.name
        formCopy[username] = e.target.value   
        setEmailPass(formCopy)
    }

    const regexHandler = (string,regex,setStateCallback,stringType)=>{
        if(regex.test(string)){
            setStateCallback({[stringType]:true})
        }else{
            setStateCallback({[stringType]:false})
        }
    }
    
    const regexValidationHandler = ()=>{
        const lowerCase = new RegExp("^(?=.*[a-z])")
        regexHandler(emailPass.password,lowerCase,setLowerCase,'lowerCase')
        const upperCase = new RegExp("^(?=.*[A-Z])")
        regexHandler(emailPass.password,upperCase,setUpperCase,'upperCase')
        const numeric = new RegExp("^(?=.*[0-9])")
        regexHandler(emailPass.password,numeric,setNumericCase,'numericCase')
        const special_char = new RegExp("^(?=.*[!@#$%^&*])")
        regexHandler(emailPass.password,special_char,setSpecialCase,'specialCase')
        const min_char = new RegExp("^(?=.{8,})")
        regexHandler(emailPass.password,min_char,setMinChar,'minChar')
    }

    const onFocusPasswordHandler = ()=>{
        const conditionPassField = !isPassFieldType
        setIsPassFieldType(conditionPassField)
    }

    useEffect(()=>{
        regexValidationHandler()
        
    },[emailPass,isPassFieldType])


    return(
        <div className="getin--pages">
            <div className="title">
                <h1>Get Account</h1>
            </div>
            <div className="form-container">
                <form>
                    <FormGroup handleChange={handleChange} type="text" 
                    name="first_name" label="First Name" valueForm={emailPass.first_name}/>

                    <FormGroup handleChange={handleChange} type="text" 
                    name="last_name" label="Last Name" valueForm={emailPass.last_name}/> 
                    <FormGroup handleChange={handleChange} type="text" 
                    name="displayName" label="Display Name" valueForm={emailPass.displayName}/>
                    <FormGroup handleChange={handleChange} type="email" 
                    name="email" label="Email" valueForm={emailPass.email}/>
                    <FormGroup handleChange={handleChange} type="password" 
                    name="password" label="Password" onfocus={onFocusPasswordHandler}
                    lowerCase={lowerCase} upperCase={upperCase} numericCase={numericCase} specialCase={specialCase} minChar={minChar} valueForm={emailPass.password}/>

                    <FormGroup handleChange={handleChange} type="password" 
                    name="confirm_password" label="Confirm Password" valueForm={emailPass.confirm_password}/>

                    <CustomButton type="submit" onclick={handleSubmit}>Lets Login</CustomButton>
                </form>
            </div>
        </div>
    )
}

export default SignUp

