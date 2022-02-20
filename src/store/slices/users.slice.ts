import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { jsonAPI } from "src/app/config/axiosConfig";

export interface userProps {
  id: number;
  name?: string;
  username: string;
  email: string;
  address?: {};
  phone: string;
  website?: string;
  company?: { name: string };
}

interface usersProps {
  users: userProps[];
  loading: boolean;
}

const initialState: usersProps = {
  users: [],
  loading: false,
};

export const getUsersAsync = createAsyncThunk("users/all", async () => {
  return await jsonAPI.get(`/users`).then((response) => {
    return response.data;
  });
});

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    getUsers: (state, action: PayloadAction<userProps[]>) => {
      state.users = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsersAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getUsersAsync.fulfilled,
      (state, action: PayloadAction<userProps[]>) => {
        state.users = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(getUsersAsync.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { getUsers } = usersSlice.actions;

export default usersSlice.reducer;
