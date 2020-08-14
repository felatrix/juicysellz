import React from 'react'

const CustomButton = ({children,type,onclick})=>{
    if(onclick !== undefined){
        return (
            <div className="form-group">
                <div className="button-login"  onClick={onclick} ><p>{children}</p> </div>
            </div>
        )
    }else{
        return (
            <div className="form-group">
                <input type={type} value={children}/>
            </div>
        )
    }

}

export default CustomButton