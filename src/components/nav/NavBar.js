import * as React from "react";

import { NavLink } from "react-router-dom";
import { Navigate, Routes, Route, Link, Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import NavBarMenu from "./NavBarMenu";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@mui/material/MenuList";
import Typography from "@material-ui/core/Typography";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import Stack from "@mui/material/Stack";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export class NavBar extends React.Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Wave Explorer</Typography>
          <NavBarMenu />
        </Toolbar>
      </AppBar>
    );
  }
}

export default NavBar;
