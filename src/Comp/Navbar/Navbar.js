import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../../providers/UserProvider";
import { Link, Redirect } from "react-router-dom";
import firebase, { logOut } from "../../services/firebase";
import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  Avatar,
  Menu,
  MenuItem,
} from "@material-ui/core";

export default function Navbar() {
  const user = useContext(UserContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const handleLogOut = () => {
    logOut();
    window.location.href = "/";
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            SDE CRACKER
          </Typography>
          <IconButton
            color="inherit"
            onClick={handleClick}
            aria-controls="simple-menu"
            aria-haspopup="true"
          >
            <Avatar src={user?.photoURL} />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link to="/profile" style={{ textDecoration: "none" }}>
              <MenuItem>Profile</MenuItem>
            </Link>
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              <MenuItem>Dashboard</MenuItem>
            </Link>
            <Link to="/discussion" style={{ textDecoration: "none" }}>
              <MenuItem>Discussion Forum</MenuItem>
            </Link>
            <Link to="/connect" style={{ textDecoration: "none" }}>
              <MenuItem>Connect</MenuItem>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <MenuItem>About us</MenuItem>
            </Link>
            <MenuItem onClick={handleLogOut}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
