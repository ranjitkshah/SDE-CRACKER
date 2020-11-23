import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "./providers/UserProvider";
import { Redirect } from "react-router-dom";
import { logOut } from "./services/firebase";
import { AppBar, IconButton, makeStyles,Paper, Toolbar, Typography,Button, Avatar,Menu,MenuItem, Grid, Card } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import MenuIcon from '@material-ui/icons/Menu';

import question from './providers/QuestionData';
import DayGrid from "./Comp/DayGrid/DayGrid";


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

export default function Dashboard() {
  const user = useContext(UserContext);
  const [redirect, setredirect] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null)
  const classes = useStyles();
  
  console.log(question)

  const handleLogOut=()=>{
    logOut();
    window.location.href="/";
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  
  useEffect(() => {
    if (!user) {
      setredirect("/");
    }
  }, [user]);
  if (redirect) {
   return <Redirect to={redirect} />;
  }

  return (
    <>
    
    {user&&<div className={classes.root}>
     <AppBar 
      position="static"
      color='secondary'
      >
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
            SDE CRACKER
          </Typography>
          <IconButton
          color='inherit'
          onClick={handleClick}
          aria-controls="simple-menu"
           aria-haspopup="true"
          >
            <Avatar src={user.photoURL} />
          </IconButton>
          <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
      </Menu>
          
        </Toolbar>
      </AppBar>
      <div>
        <DayGrid data={question}/>
      </div>
    </div>}
    </>
  );
}