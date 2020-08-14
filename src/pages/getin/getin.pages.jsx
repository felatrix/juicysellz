import React from 'react'
import './getin.styles.scss'

import FormGroup from '../../components/getin/formgroup.component'
import CustomButton from '../../components/getin/custombutton.component'

import {Link,withRouter} from 'react-router-dom'

import {signInWithGoogle} from '../../utils/firebase.utils'

import {useFormFields} from '../../utils/hooks/formHandling'
import { auth } from '../../utils/firebase.utils'

const GetIn = ({match})=>{
    const [fields,handlerField,resetFields] = useFormFields({username:'',password:''})
    const {username,password}  = fields
    const handleSubmit = async(e)=>{
        // e.preventDefault()
        const {username,password} = fields
        try {
            await auth.signInWithEmailAndPassword(username,password)
            resetFields()
        } catch (error) {
            console.error(error)
        }
    }
    const handleSubmitDemo = async(e)=>{
        // e.preventDefault()
        const {username,password} = fields
        try {
            await auth.signInWithEmailAndPassword('user@demo.com','Iwanada904!')
            resetFields()
        } catch (error) {
            console.error(error)
        }
    }
    return(
        <div className="getin--pages">
            <div className="title">
                <h1>Get In</h1>
            </div>
            <div className="form-container">
                <form>
                    <FormGroup handleChange={handlerField} type="text" 
                    name="username" label="Username or Email" valueForm={username}/>
                    
                    <FormGroup handleChange={handlerField} type="password" 
                    name="password" label="Password" valueForm={password}/>

                    <CustomButton onclick={handleSubmit}>Lets Login</CustomButton>
                    <CustomButton onclick={signInWithGoogle}>Login With Google</CustomButton>
                    <CustomButton onclick={handleSubmitDemo}>Sign In With Demo User</CustomButton>

                </form>
            </div>
            <div className="footnote">
                <p>You dont have an account ? lets get that in <Link to={`${match.url}/signup`}>here</Link></p>
            </div>
        </div>
    )
}

export default withRouter(GetIn)