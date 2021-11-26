import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth, provider } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "@firebase/auth";
import { useSelector, useDispatch } from 'react-redux'


const getGoogleInfo = () => {
  return (dispatch, getState) => {
    // make async call to google api
    dispatch(googleSignIn())
  }
} 

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    credential: null,
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    emailSignIn: (state, action) => {

    },
    googleSignIn: (state, action) => {
      state.user = action.payload; 
    },
  },
});

// Action creators are generated for each case reducer function
export const { googleSignIn } = authSlice.actions;

export default authSlice.reducer;
