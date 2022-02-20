import React from "react";
import { Button as MuiButton } from "@mui/material";

type IProps = {
  children: React.ReactNode;
  variant?: any;
  startIcon?: any;
  type?: "submit" | "button";
  disabled?: boolean;
  sx?: {};
  onClick?: () => void;
};

function Button(props: IProps) {
  const { children, ...rest } = props;

  return <MuiButton {...rest}>{children}</MuiButton>;
}

export default Button;
