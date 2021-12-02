import { createSlice } from "@reduxjs/toolkit";
import db from "../firebase";
import { collection, doc, setDoc, addDoc } from "firebase/firestore";

// Action creators
export const postArticleAPI = (article) => {
    return (dispatch, getState) => {
      const articlesRef = collection(db, "articles");
      addDoc(articlesRef, article)
      .then((payload) => {
        console.log("Added article: ", payload);
        dispatch(updateArticles(article))
      })
      .catch((err) => {
        console.log(err);
      })
    }
}

export const articleSlice = createSlice({
    name: "article",
    initialState: {
      articles: [],
    },
    reducers: {
      updateArticles: (state, action) => {
        return {
            acticles: [...state.articles, action.payload],
        }
      },
    },
  });
  
  // Action creators are generated for each case reducer function
  export const { updateArticles } = articleSlice.actions;
  
  export default articleSlice.reducer;