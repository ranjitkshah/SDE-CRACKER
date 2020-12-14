import { Divider, makeStyles } from "@material-ui/core";
import React from "react";
import Navbar from "../Navbar/Navbar";

export default function About() {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <div className={classes.title}>
        <h3>ABOUT US</h3>
      </div>
      <Divider/>
      <div>
          <p>
              This project is developed for who want to prepare for sde post.
          </p>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
    title: {
        margin: 20,
        display: "flex",
        justifyContent: "center",
        fontSize: '1.5rem',
      },
}));
