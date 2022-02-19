import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import { closeDialog } from "./dialog.slice";
import axios from "axios";
import { JsonBaseURL } from "src/app/config/axiosConfig";

export interface postProps {
  id?: number | null;
  userId: string;
  title?: string;
  body?: string;
}

interface postsProps {
  posts: postProps[];
  loading: boolean;
}

const initialState: postsProps = {
  posts: [],
  loading: false,
};

const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    getPosts: (state, action: PayloadAction<postProps[]>) => {
      const posts = action.payload;
      state.posts = posts;
    },
    addPost: (state, action: PayloadAction<postProps>) => {
      state.posts = [action.payload, ...state.posts];
    },
    updatePost: (state, action: PayloadAction<postProps>) => {
      const index = state.posts.findIndex(
        (post) => post.id === action.payload.id
      );
      state.posts[index] = action.payload;
    },
    removePost: (state, action: PayloadAction<number>) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
});

export const { getPosts, addPost, updatePost, removePost } = postsSlice.actions;

export const getPostsApi = () => (dispatch: Dispatch) => {
  return axios.get(`${JsonBaseURL}/posts`).then((response) => {
    dispatch(getPosts(response.data));
  });
};

export const addPostApi = (data: postProps) => (dispatch: Dispatch) => {
  return axios.post(`${JsonBaseURL}/posts`, data).then((response) => {
    dispatch(addPost(response.data));
    dispatch(closeDialog());
  });
};

export const updatePostApi = (data: postProps) => (dispatch: Dispatch) => {
  return axios.put(`${JsonBaseURL}/posts/${data.id}`, data).then((response) => {
    dispatch(updatePost(data));
    dispatch(closeDialog());
  });
};

export const deletePostApi = (id: number) => (dispatch: Dispatch) => {
  return axios.delete(`${JsonBaseURL}/posts/${id}`).then(() => {
    dispatch(removePost(id));
  });
};

export default postsSlice.reducer;
