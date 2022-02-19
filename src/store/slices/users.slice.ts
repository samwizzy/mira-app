import {
  createSlice,
  PayloadAction,
  Dispatch,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
import { JsonBaseURL } from "src/app/config/axiosConfig";

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
  return await axios.get(`${JsonBaseURL}/users`).then((response) => {
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
    builder.addCase(
      getUsersAsync.rejected,
      (state, action: PayloadAction<any>) => {
        console.log(action, "action rejected");
        state.loading = false;
      }
    );
  },
});

export const { getUsers } = usersSlice.actions;

export const getUsersApi = () => (dispatch: Dispatch) => {
  return axios.get(`${JsonBaseURL}/users`).then((response) => {
    dispatch(getUsers(response.data));
  });
};

export default usersSlice.reducer;
