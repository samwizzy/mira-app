import React from "react";
import { Button as MuiButton } from "@mui/material";

interface IProps {
  children: React.ReactNode;
  type?: "submit" | "button";
  disabled?: boolean;
  sx?: {};
  onClick?: () => void;
}

function Button(props: IProps) {
  const { children, type, disabled, sx, onClick } = props;

  return (
    <MuiButton
      type={type}
      disabled={disabled}
      variant="contained"
      sx={{ ...sx }}
      onClick={onClick}
    >
      {children}
    </MuiButton>
  );
}

export default Button;
