import { collabRef } from "../config/firebase";
import { FETCH_POSTS } from "./types";

export const addPost = newPost => async dispatch => {
  collabRef.push().set(newToDo);
};

export const deletePost = deletePost => async dispatch => {
  collabRef.child(completeToDoId).remove();
};

export const fetchPosts = () => async dispatch => {
  collabRef.on("value", snapshot => {
    dispatch({
      type: FETCH_POSTS,
      payload: snapshot.val()
    });
  });
};
