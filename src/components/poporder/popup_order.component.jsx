import React,{useState} from 'react'
import './popup_order.styles.scss'
import {connect} from 'react-redux'
import setPopupOrder from '../../utils/redux/order/order.action'
import {useFormFields} from '../../utils/hooks/formHandling'

const Popup_Order = ({closePopup})=>{
    const [orderValue,setOrderValue] = useState({
            number:1,
    })
    const [fields,setFields,resetFields] = useFormFields({size:'small',note:''})
    const numberHandler = (data)=>{
        const copyState = {...orderValue}
        copyState.number = orderValue.number+data
        setOrderValue(copyState)
    }
    const otherHandler = (e)=>{
        const copyState = {...orderValue}
        copyState[e.target.name] = e.target.value
        setOrderValue(copyState)
    }
        return(
            <div className="popup--order">
                <div className="popup--content">
                    <h2 className="title">Detail Order</h2>
                    <div className="option--order">
                        <div className="option--order--detail">
                            <label htmlFor="number">Number </label>
                            <div className="setNumber">
                                <div className="dec" onClick={()=>{numberHandler(-1)}}><i className="fas fa-minus"></i></div>
                                <input type="number" name="number" id="number" value={orderValue.number}/>
                                <div className="dec" onClick={()=>{numberHandler(1)}}><i className="fas fa-plus"></i></div>
                            </div>
                        </div>
                        <div className="option--order--detail">
                                <label htmlFor="size">Size </label>
                                <div className="setSize">
                                    <form action="">
                                    <input type="radio" id="small" name="size" value="small" onClick={(e)=>{setFields(e)}}></input>
                                    <label htmlFor="small">Small</label>
                                    <input type="radio" id="medium" name="size" value="medium" onClick={(e)=>{setFields(e)}}></input>
                                    <label htmlFor="medium">Medium</label>
                                    <input type="radio" id="large" name="size" value="large" onClick={(e)=>{setFields(e)}}></input>
                                    <label htmlFor="large">Large</label>
                                    </form>
                                </div>
                        </div>
                        <div className="option--order--detail">
                            <label htmlFor="note">Additional Notes </label><br/>
                            <div className="setAdd">
                            <textarea placeholder="type your additional notes here..." name="note" id="note" rows="3" onChange={(e)=>{setFields(e)}}></textarea>   
                            </div>
                        </div>
                        <div className="option--order--detail">
                            <label htmlFor="note">Price </label>
                        </div>
                        <div className="buttonOrder">
                            <button onClick={()=>closePopup()}>Cancel</button>
                            <button>Order</button>
    
                        </div>
                    </div>
                </div>
            </div>
        )
}

const mapDispatchToProps = (dispatch)=>{
    return{
        closePopup:()=>{dispatch(setPopupOrder())}
    }
}

export default connect(null,mapDispatchToProps)(Popup_Order)