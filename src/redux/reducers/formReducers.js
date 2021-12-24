import { actionTypes } from "../constants/actionsTypes";



export const personalInfoReducer=(state={},action)=>{
  switch (action.type) {
      case actionTypes.SET_PERSONAL_INFO:
          return {...state,info:action.payload}
     
      default:
          return state
  }
}

export const qualificationReducer=(state={},action)=>{
    switch (action.type) {
      case actionTypes.SET_QUALIFICATION_INFO:
        return {...state,qua:action.payload}
        
      default:
        return state
    }
}