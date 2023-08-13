import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

export const signin=createAsyncThunk(
    "/api/admin/login",async(info,rejectWithValue)=>{
        try{
                const res=await axios.post("/admin/login",info)
                return res.data
        }
        catch(errors){
                return rejectWithValue(errors.response.data.msg)
        }
    }
)


const adminSlice=createSlice({
    name:"admin",
    initialState:{
        admindata:[],
        isLoading:false,
        token:localStorage.getItem("token")||null,
        isAuth:Boolean(localStorage.getItem("isAuth")) || false
    },
    reducers:{
        logout:(state)=>{
            state.isAuth=false 
            state.token=null
            localStorage.removeItem("isAuth")
            localStorage.removeItem("token")
        }
    },

    extraReducers:{
        [signin.pending]:(state)=>{
            state.isLoading=true},
            [signin.fulfilled]:(state,action)=>{
            state.isAuth=true
            state.isLoading=false
            state.admindata=action.payload.admin
            state.token=action.payload.token
            localStorage.setItem("token",state.token)
            localStorage.setItem("isAuth",state.isAuth)
            },
            [signin.rejected]:(state)=>{
            state.isLoading=false
            state.isAuth=false
            state.token=null
            },
        }
    })
    
    export default adminSlice.reducer
    export const {logout}=adminSlice.actions
    