import React from "react";
import classNames from "classnames";
import IconButton from "@mui/material/IconButton";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";

type cardProps = {
  title?: string;
  subtitle?: string;
  className?: string;
  footer?: any;
  children: React.ReactNode;
  onDelete: () => void;
  onEdit: () => void;
};

function Card(props: cardProps) {
  const { title, subtitle, children, className, footer, onDelete, onEdit } =
    props;

  return (
    <div
      className={classNames(
        "w-full flex flex-col bg-white rounded-md shadow-md",
        className
      )}
    >
      <div className="w-full flex justify-between flex-row items-start border-b">
        <div className="p-4">
          <p className="text-lg font-light text-gray-800">{title}</p>
          <p className="text-gray-600">{subtitle}</p>
        </div>

        <IconButton edge="start" sx={{ m: 2 }} onClick={onEdit}>
          <HiOutlinePencil size={24} />
        </IconButton>
      </div>

      <div className="p-4 h-full">{children}</div>

      <div className="flex justify-between items-center p-4 border-t">
        <div>{footer}</div>
        <div>
          <IconButton onClick={onDelete}>
            <HiOutlineTrash size={24} />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Card;
