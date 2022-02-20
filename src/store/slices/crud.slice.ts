import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  Dispatch,
} from "@reduxjs/toolkit";
import { closeDialog } from "./dialog.slice";
import { jsonAPI } from "src/app/config/axiosConfig";
import { AppDispatch } from "../";

export type postProps = {
  id: number | null;
  userId: string;
  title?: string;
  body?: string;
};

interface postsProps {
  posts: postProps[];
  loading: boolean;
  submitting: boolean;
}

const initialState: postsProps = {
  posts: [],
  loading: false,
  submitting: false,
};

export const getPostsAsync = createAsyncThunk("posts/all", async () => {
  return await jsonAPI.get(`/posts`).then((response) => {
    return response.data;
  });
});

const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    setSubmitting: (state, action: PayloadAction<boolean>) => {
      state.submitting = action.payload;
    },
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
  extraReducers: (builder) => {
    builder.addCase(getPostsAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getPostsAsync.fulfilled,
      (state, action: PayloadAction<postProps[]>) => {
        state.posts = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(getPostsAsync.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { getPosts, setSubmitting, addPost, updatePost, removePost } =
  postsSlice.actions;

export const addPostApi =
  (data: postProps) => async (dispatch: AppDispatch) => {
    dispatch(setSubmitting(true));
    return await jsonAPI.post(`/posts`, data).then((response) => {
      dispatch(addPost(response.data));
      dispatch(setSubmitting(false));
      dispatch(closeDialog());
    });
  };

export const updatePostApi = (data: postProps) => (dispatch: Dispatch) => {
  return jsonAPI.put(`/posts/${data.id}`, data).then((response) => {
    dispatch(updatePost(response.data));
    dispatch(closeDialog());
  });
};

export const deletePostApi = (id: number) => (dispatch: Dispatch) => {
  return jsonAPI.delete(`/posts/${id}`).then(() => {
    dispatch(removePost(id));
  });
};

export default postsSlice.reducer;
