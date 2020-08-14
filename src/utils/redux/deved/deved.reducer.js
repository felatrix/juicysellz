const INITIAL_STATE = {
        counter:0
}

const counterReducer = (state = INITIAL_STATE,action)=>{
    switch(action.key){
        case 'INCREMENT':
            let newStateInc = {
                ...state,
                counter: state.counter + 1
            };
            console.log(newStateInc)
            return newStateInc
        case 'DECREMENT':
            let newStateDec = {
                ...state,
                counter: state.counter - 1
            };
            console.log(newStateDec)
            return newStateDec
        default:
            return state
    }
}

export default counterReducer