import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { HiOutlineMenuAlt2, HiOutlineX } from "react-icons/hi";

const options = [
  { name: "Home", path: "/" },
  { name: "Task one", path: "/taskone" },
  { name: "Task two", path: "/tasktwo" },
];

export default function MobileMenu({ className }: { className: string }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClickListItem = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event: any, option: any) => {
    navigate(option.path);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classNames("bg-white", className)}>
      <IconButton color="primary" onClick={handleClickListItem}>
        {open ? <HiOutlineX size={24} /> : <HiOutlineMenuAlt2 size={24} />}
      </IconButton>

      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        transitionDuration={300}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "mobile-menu",
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.name}
            selected={option.path === pathname}
            onClick={(event) => handleMenuItemClick(event, option)}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
