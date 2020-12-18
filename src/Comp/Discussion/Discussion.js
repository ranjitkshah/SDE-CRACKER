import { makeStyles } from "@material-ui/core";
import React from "react";
import Navbar from "../Navbar/Navbar";

export default function Discussion() {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <h3 className={classes.title}>DiSCUSSION FORUM</h3>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  title: {
    margin: 20,
    display: "flex",
    flexDirection: "column",
    fontSize: "1.5rem",
  },
}));
