import React from 'react'

import {connect} from 'react-redux'

import {incrementState,decrementState} from '../utils/redux/deved/deved.action'

const DevEd = ()=>{
    return (
        <div>
            <h1>0</h1>
            <button value={"+"} >Tambah</button>
            <button value={"-"} >Kurang</button>

        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        counter:state.devEd.counter
    }
}

const mapDispatchToProps = dispatch => {
    return{
        increment:()=> dispatch(incrementState()),
        decrement:()=> dispatch(decrementState())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DevEd)