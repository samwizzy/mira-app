import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { RootState } from "src/store";
import { closeDialog } from "src/store/slices/dialog.slice";

interface IProps {
  title: string;
  subtitle: string;
  children: any;
}

function AppDialog(props: IProps) {
  const dispatch = useDispatch();
  const { title, subtitle, children } = props;
  const { open, data } = useSelector(({ dialog }: RootState) => dialog.props);

  console.log(open, data);

  const handleClose = () => {
    dispatch(closeDialog());
  };

  return (
    <Dialog
      open={open}
      keepMounted
      onClose={handleClose}
      aria-describedby="add-post-dialog"
      fullWidth
      maxWidth="xs"
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="dialog-subtitle">{subtitle}</DialogContentText>

        <div className="my-4">{children}</div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default AppDialog;
