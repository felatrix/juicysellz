import React from 'react'
import {withRouter} from 'react-router-dom'

const FormGroup = ({handleChange,type,name,label,match,onfocus,lowerCase,upperCase,numericCase,specialCase,minChar,valueForm})=>{
    if(match.url !== '/getin/signup'){
        return (
            <div className="form-group">
                <input type={type} name={name} id={name} onChange={handleChange} placeholder=" " autoComplete="false" value={valueForm}/>
                <label htmlFor={name}>{label}</label>
            </div>
        )
    }else{
        if(name !== 'password'){
            return (
                <div className="form-group">
                    <input type={type} name={name} id={name} onChange={handleChange} placeholder=" " autoComplete="false" value={valueForm}/>
                    <label htmlFor={name}>{label}</label>
                </div>
            )
        }else{
            return (
                <div className="form-group">
                    <input type={type} name={name} id={name} onChange={handleChange} placeholder=" " autoComplete="false" onFocus={onfocus} onBlur={onfocus}/>
                    <label htmlFor={name}>{label}</label>
                    <div className="validation-notice">
                        <p style={minChar.minChar ? {color:'green'}:{}}>have 8 Minimal character</p>
                        <p style={lowerCase.lowerCase ? {color:'green'}:{}}>have 1 Minimal lower case</p>
                        <p style={upperCase.upperCase ? {color:'green'}:{}}>have 1 Minimal upper case</p>
                        <p style={numericCase.numericCase ? {color:'green'}:{}}>have 1 Minimal numeric</p>
                        <p style={specialCase.specialCase ? {color:'green'}:{}}>have 1 Minimal special character such as !@#$%^&*</p>
                    </div>
                </div>
            )
        }

    }

}

export default withRouter(FormGroup)