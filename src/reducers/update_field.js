export default function update_field (state={}, action){
    switch(action.type){
        case 'UPDATE_FIELD':
            return Object.assign({}, state, [...state, action.payload.new_string])
        default:
            return state
    }
}