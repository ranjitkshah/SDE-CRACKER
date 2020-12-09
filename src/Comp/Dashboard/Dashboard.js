import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../../providers/UserProvider";
import { Link, Redirect } from "react-router-dom";
import firebase , { logOut }  from '../../services/firebase';
import { AppBar, IconButton, makeStyles, Toolbar, Typography, Avatar,Menu,MenuItem} from "@material-ui/core";
import DayGrid from "../DayGrid/DayGrid";


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
  const [allQuestion,setallQuestion]=useState([]);
  const [anchorEl, setAnchorEl] = useState(null)
  const classes = useStyles();
  
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

  // for route reflecting
  // useEffect(() => {
  //   if (!user) {
  //     setredirect("/");
  //   }
  // }, [user]);


  if (redirect) {
   return <Redirect to={redirect} />;
  }
  return (
    <>
    
    <div className={classes.root}>
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
          <Avatar src={user?.photoURL} />
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
        <Link>
        </Link>
        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
      </Menu>
        </Toolbar>
      </AppBar>
      <div>
        <DayGrid/>
      </div>
    </div>
    </>
  );
}