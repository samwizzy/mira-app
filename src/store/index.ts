import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./slices/users.slice";
import crudReducer from "./slices/crud.slice";
import chartReducer from "./slices/chart.slice";
import dialogReducer from "./slices/dialog.slice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    crud: crudReducer,
    chart: chartReducer,
    dialog: dialogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
