import { Box, makeStyles } from "@material-ui/core";
import { LinkedIn } from "@material-ui/icons";
import React from "react";
import Navbar from "../Navbar/Navbar";

export default function About() {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <div className={classes.title}>
        <h3>SDE-CRACKER</h3>
      </div>
      <div className={classes.center}>
        <span className={classes.subtitle}>ABOUT US</span>
        <p>
          SDE-CRACKERS helps you to build confidence in advance DSA problems and
          interview preparation. Only start doing these problems if you feel you
          are comfortable with solving basic problems of DSA. Once you are, you
          can start preparing for these problems, because these problems are
          solely interview based.
          <br />
          <br />
          Sheet prepared by (Credits) :{" "}
          <a
            href="https://www.linkedin.com/in/rajarvp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Raj Vikramaditya
          </a>{" "}
          🙏
          <br />
          <br />
          Developed by :{" "}
          <a
            href="https://www.linkedin.com/in/devansh5/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @devanshChaubey
          </a>{" "}
          <a
            href="https://github.com/devansh5"
            target="_blank"
            rel="noopener noreferrer"
          >
            👨‍💻
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/ranjit-shah-b94b7a1a8/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @ranjitkShah
          </a>{" "}
          <a
            href="https://github.com/ranjitkshah"
            target="_blank"
            rel="noopener noreferrer"
          >
            👨‍💻
          </a>
          <br />
          <br />
          Project:{" "}
          <a
            href="https://github.com/ranjitkshah/SDE-CRACKER"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>{" "}
          (opensource)
        </p>
        <span className={classes.subtitle}>
          for the community ❤️ by the community 😎
        </span>
        <span></span>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
    justifyContent: "center",
    fontSize: "2rem",
  },
  center: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
    backgroundColor: "#f3ecff",
  },
  subtitle: {
    fontSize: "1.25rem",
    display: "flex",
    justifyContent: "center",
    fontStyle: "underline",
  },
}));
