import {combineReducers} from 'redux'
import {personalInfoReducer,qualificationReducer} from './formReducers'

const reducers=combineReducers({
    personalInfo:personalInfoReducer,
    qualificationInfo:qualificationReducer
})

export default reducers