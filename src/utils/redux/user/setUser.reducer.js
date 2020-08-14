const INITIAL_STATE = {currentUser:null}

const SetUserReducer = (state=INITIAL_STATE,action) => {
    switch (action.type) {
        case 'SET_USER_CURRENT':
            return{
                ...state,
                currentUser:action.payload
            }
        default:
            return state;
    }
}

export default SetUserReducer