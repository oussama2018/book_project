import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
export const signup=createAsyncThunk(
    "/api/user/register",async(info,{rejectWithValue})=>{
        try {
            const res=axios.get("/user/register",info)
            return res.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const userSlice=createSlice({
    name:"user",
    initialState:{
        userdata:[],
        isloading:false,
        token:localStorage.getItem("token")||null,
        isAuth:localStorage.getItem("isAuth")||false
    },
    reducers:{

    },
    extraReducers:{
        [signup.pending]:(state)=>{state.isloading=true},
        [signup.rejected]:(state)=>{state.isloading=false 
        state.isAuth=false
        state.token=null},
        [signup.pending]:(state,action)=>{
        state.isloading=false
        state.userdata=action.payload.user
        state.token=action.payload.token
        localStorage.setItem("token",state.token)
        localStorage.setItem("token",state.isAuth)
    }
    }
})
export default  userSlice.reducer