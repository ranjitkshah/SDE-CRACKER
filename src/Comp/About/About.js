import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import Navbar from "../Navbar/Navbar";

export default function About() {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <div className={classes.title}>
        <h3>SDE CRACKER</h3>
      </div>
      
        <Box boxShadow={3}>
          <div className={classes.center}>
              <p>
                  This project is developed for who want to prepare for sde post.
              </p>
          </div>
        </Box>
      
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
    title: {
        margin: 20,
        display: "flex",
        justifyContent: "center",
        fontSize: '2.5rem',
      },
    center:{
      display: "flex",
	    flexDirection: "column",
      alignItems: "center",
      textAlign:"center",
      padding:70,
      backgroundColor:'#e0fffd',
      fontSize:'1.5rem',
      color:'#112c7b',
    }
}));
