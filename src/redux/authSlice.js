import { createSlice } from "@reduxjs/toolkit";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "@firebase/auth";


export const getGoogleInfo = () => {
  return (dispatch, getState) => {
    signInWithPopup(auth, provider)
    .then((result) => {
        const user = result.user; 
        dispatch(googleSignIn(user));
    })
    .catch((err) => {
      console.log(err);
    })
  }
} 

export const signOutAPI = () => {
  return (dispatch, getState) => {
    auth.signOut()
    .then(() => {
      console.log('Successfully logged Out')
      dispatch(userSignOut())
    })
    .catch((err) => {
      console.log(err);
    })
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
    emailSignIn: (state, action) => {

    },
    googleSignIn: (state, action) => {
      state.user = action.payload;
    },
    userSignOut: (state) => {
      state.user = null; 
    }
  },
});

// Action creators are generated for each case reducer function
export const { googleSignIn, userSignOut } = authSlice.actions;

export default authSlice.reducer;
