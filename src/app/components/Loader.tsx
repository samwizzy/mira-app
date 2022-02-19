import React from "react";
import classNames from "classnames";
import CircularProgress from "@mui/material/CircularProgress";

type IProps = {
  className?: string;
};

function Loader(props: IProps) {
  const { className } = props;

  return (
    <div className="h-screen flex items-center justify-center">
      <CircularProgress
        color="primary"
        size={24}
        className={classNames("text-white", className)}
      />
    </div>
  );
}

export default Loader;
