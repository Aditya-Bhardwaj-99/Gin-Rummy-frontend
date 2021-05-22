export const StateReducer = (state={},action)=>{
    switch(action.type){
        case 'UPDATE_STATE':
            return {
                ...state,...{[action.id]:action.payload}
            }
        default: return state;
    }
}