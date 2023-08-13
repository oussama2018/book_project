import {configureStore} from "@reduxjs/toolkit" 
import  useReducer  from "./slices/userSlice"
import adminReducer from "./slices/adminSlice"


export default configureStore({reducer:{user:useReducer,admin:adminReducer}})
