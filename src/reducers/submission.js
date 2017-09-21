export default function submissionReducer (state={}, action){
    switch(action.type){
        case 'SUBMIT':
            return [
                ...state,
                Object.assign({}, action.payload)
            ];
        default:
            return state
    }
}
