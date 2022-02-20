import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { RootState } from "src/store";
import { closeDialog } from "src/store/slices/dialog.slice";

type IProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

function AppDialog(props: IProps) {
  const dispatch = useDispatch();
  const { title, subtitle, children } = props;
  const { open } = useSelector(({ dialog }: RootState) => dialog.props);

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
      <DialogTitle>
        {title}
        <p className="block text-gray-600 text-base font-light">{subtitle}</p>
      </DialogTitle>
      <DialogContent>
        <div className="my-4">{children}</div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default AppDialog;
