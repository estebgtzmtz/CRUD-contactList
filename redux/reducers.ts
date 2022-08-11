import { IAction, IDataFromContacts } from "../interfaces/interfaces";
import {combineReducers} from 'redux'
import { ActionTypes } from "./types";
import { FaceRetouchingNatural } from "@mui/icons-material";

const initialState = {
  fetching: false,
  contactsList:[],
  currentPage:1,
  perPage: 1
}

const contactReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_CONTACTS:
        return {
          ...state, 
          fetching: true
        }
      break;
    case ActionTypes.GET_ALL_CONTACTS_SUCCESS:
      return {
        contactsList: action.contactsArray, 
          currentPage: action.currentPage,
          perPage: action.perPage,
          fetching: action.fetching
      }
      break;
    case ActionTypes.DELETE_CONTACT_BY_ID:
      return{ 
        ...state,
        contactsList: action.contactsArray
      }
    default:
      return {...state}
  }
}

const reducers = combineReducers({
  contacts:contactReducer
})

export default reducers;