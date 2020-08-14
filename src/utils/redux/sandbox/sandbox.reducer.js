const INITIAL_STATE = {
    userName:'iwan'
}

const sandboxReducer = (state=INITIAL_STATE,action)=>{
    switch (action.key) {
        case 'SET_USERNAME':
            return {
                ...state,
                userName:action.payload
            }
        default:
            return state;
    }
}

export default sandboxReducer