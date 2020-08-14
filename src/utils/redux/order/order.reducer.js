const initial_state = {
    popup:false
}

const orderReducer = (state = initial_state,action)=>{
    switch (action.type) {
        case 'SET_POPUP_ORDER':
            return{
                ...state,
                popup:!state.popup
            }
        default:
            return state
    }
}

export default orderReducer