import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import { postProps } from "./crud.slice";

export interface propProps {
  open: boolean;
  data: any;
}

interface dialogProps {
  props: propProps;
  type: string;
  loading: boolean;
}

const initialState: dialogProps = {
  props: {
    open: false,
    data: null,
  },
  type: "new",
  loading: false,
};

const dialogSlice = createSlice({
  name: "dialog",
  initialState: initialState,
  reducers: {
    openDialog: (state) => {
      state.props.open = true;
      state.type = "new";
    },
    openEditDialog: (state, action: PayloadAction<postProps>) => {
      state.props.open = true;
      state.type = "edit";
      state.props.data = action.payload;
    },
    closeDialog: (state) => {
      state.props.open = false;
      state.props.data = null;
    },
  },
});

export const { openDialog, openEditDialog, closeDialog } = dialogSlice.actions;

export const openEditDialogAsync =
  (post: postProps) => (dispatch: Dispatch) => {
    return dispatch(openEditDialog(post));
  };

export default dialogSlice.reducer;
