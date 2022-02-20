import * as React from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { HiOutlineArrowLeft } from "react-icons/hi";

function BackButton() {
  const navigate = useNavigate();

  return (
    <div className="my-2">
      <IconButton color="primary" onClick={() => navigate(-1)}>
        <HiOutlineArrowLeft size={24} />
      </IconButton>
    </div>
  );
}

export default BackButton;
