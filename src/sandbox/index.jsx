import React from 'react'
import TextForm from './textForm'

import {connect} from 'react-redux'
import {setUsernameAction} from '../utils/redux/sandbox/sandbox.action'


const SandBox = ({userName,setUserName})=>{
    return(<div>
        <h1>My Sandbox</h1>
        <TextForm title={"nama kamu"} value={userName} handleChange={e=>setUserName(e.target.value)}/>
    </div>)
}

const mapDispatchToProps = dispatch => ({
    setUserName : user => dispatch(setUsernameAction(user))
})

const mapStateToProps = state =>{
    return({
        userName:state.sandbox.userName
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(SandBox)