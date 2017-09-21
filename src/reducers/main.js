import {combineReducers} from 'redux'
import submissionReducer from './submission'
import update_field from './update_field'

const allReducers = combineReducers({
    submissions: submissionReducer,
    update_field: update_field
})

export default allReducers