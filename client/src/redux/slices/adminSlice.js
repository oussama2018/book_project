import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signin = createAsyncThunk(
  "admin/signin",
  async (info, { rejectWithValue }) => {
    try {
      const res = await axios.post("/admin/login", info);
      return res.data;
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);

export const getAllBooks = createAsyncThunk(
  "admin/getAllBooks",
  async (info, { rejectWithValue }) => {
    try {
      const res = await axios.get("/admin/Book/getAllBooks",info);
      return res.data;
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    admindata: [],
    posts: [], // Initialize your posts state
    isLoading: false,
    token: localStorage.getItem("token") || null,
    isAuth: Boolean(localStorage.getItem("isAuth")) || false,
  },
  reducers: {
    logout: (state) => {
      state.isAuth = false;
      state.token = null;
      localStorage.removeItem("isAuth");
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    [signin.pending]: (state) => {
      state.isLoading = true;
    },
    [signin.fulfilled]: (state, action) => {
      state.isAuth = true;
      state.isLoading = false;
      state.admindata = action.payload.admin;
      state.token = action.payload.token;
      localStorage.setItem("token", state.token);
      localStorage.setItem("isAuth", state.isAuth);
    },
    [signin.rejected]: (state) => {
      state.isLoading = false;
      state.isAuth = false;
      state.token = null;
    },
    [getAllBooks.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.posts; // Update the posts state
    },
    [getAllBooks.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default adminSlice.reducer;
export const { logout } = adminSlice.actions;
