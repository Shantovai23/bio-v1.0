import {actionTypes} from '../constants/actionsTypes'

export const setPersonalInfo=(info)=>{
    return{
        type:actionTypes.SET_PERSONAL_INFO,
        payload:info
    }
}

export const setQualificationInfo=(info)=>{
   return{
       type:actionTypes.SET_QUALIFICATION_INFO,
       payload:info
   }
}