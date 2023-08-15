import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
export const signup=createAsyncThunk(
    "/api/register",async(info,rejectWithValue)=>{
        try{
                const res=await axios.post("/user/register",info)
                return res.data
        }
        catch(errors){
                return rejectWithValue(errors.response.data.msg)
        }
    }
)

// export const signup = createAsyncThunk(
//     "user/signup", async (info, rejectWithValue) => {
//         try {
//             const res = await axios.post("/register", info)
//             return res.data

//         } catch (error) {
//             return rejectWithValue(error.response.data.msg)
//             //  console.log(error.response.data.msg)
//         }
//     }
// )
export const signin=createAsyncThunk(
    "/api/login",async(info,rejectWithValue)=>{
        try{
                const res=await axios.post("/user/login",info)
                return res.data
        }
        catch(errors){
                return rejectWithValue(errors.response.data.msg)
        }
    }
)
export const getAllBooks = createAsyncThunk(
    "admin/getAllBooks",
    async (info, { rejectWithValue,dispatch }) => {
      try {
        const res = await axios.get("/user/getAllBooks");
        return res.data;
      } catch (errors) {
        return rejectWithValue(errors.response.data.msg);
      }
    }
  );




const userSlice=createSlice({
    name:"user",
    initialState:{
        userdata:[],
        posts: [],
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
        [signup.pending]:(state)=>{
            state.isLoading=true},
        [signup.fulfilled]:(state,action)=>{
        state.isLoading=false
        state.isAuth=true
        state.userdata=action.payload.user
        state.token=action.payload.token
        localStorage.setItem("token",state.token)
        localStorage.setItem("isAuth",state.isAuth)


        

        },
        [signup.rejected]:(state)=>{
        state.isLoading=false
        state.isAuth=false
        state.token=null
        },
        [signin.pending]:(state)=>{
        state.isLoading=true},
        [signin.fulfilled]:(state,action)=>{
        state.isAuth=true
        state.isLoading=false
        state.userdata=action.payload.user
        state.token=action.payload.token
        localStorage.setItem("token",state.token)
        localStorage.setItem("isAuth",state.isAuth)
        },
        [signin.rejected]:(state)=>{
        state.isLoading=false
        state.isAuth=false
        state.token=null
        },

        [getAllBooks.pending]: (state) => {
            state.isLoading = true;
          },
          [getAllBooks.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.posts = action.payload; 
            console.log(state.posts);
          },
          [getAllBooks.rejected]: (state) => {
            state.isLoading = false;
          },
    }
})

export default userSlice.reducer
export const {logout}=userSlice.actions
