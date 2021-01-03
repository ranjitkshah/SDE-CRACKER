import { Avatar, Box, Chip, makeStyles } from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import Navbar from "../Navbar/Navbar";

export default function About() {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <div className={classes.center}>
        <span className={clsx(classes.subtitle, classes.subtitle1Radius)}>
          About us
        </span>
        <p className={classes.paragraph}>
          SDE-CRACKER helps you to build confidence in advance DSA problems and
          interview preparation.
          <br />
          Only start doing these problems if you feel you are comfortable with
          solving basic problems of DSA. Once you are, you can start preparing
          for these problems, because these problems are solely interview based.
          <br />
          <br />
          Sheet prepared by (Credits) :
          <div className={classes.biodata}>
            <Avatar src="https://res.cloudinary.com/ranjitkshah/image/upload/v1609700093/IMG_20200425_064827_2_vc4c0c.jpg" />
            <span className={classes.subbiodata}>
              Ranjit Shah
              <br />
              <a
                href="https://github.com/ranjitkshah"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={classes.img}
                  src="https://img.icons8.com/fluent/48/000000/github.png"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/ranjit-shah-b94b7a1a8/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={classes.img}
                  src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                />
              </a>
            </span>
          </div>
          Developed by :
          <div className={classes.developer} >
            <div className={classes.biodata}>
              <Avatar src="https://res.cloudinary.com/ranjitkshah/image/upload/v1609700093/IMG_20200425_064827_2_vc4c0c.jpg" />
              <span className={classes.subbiodata}>
                Ranjit Shah
                <br />
                <a
                  href="https://github.com/ranjitkshah"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className={classes.img}
                    src="https://img.icons8.com/fluent/48/000000/github.png"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/ranjit-shah-b94b7a1a8/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className={classes.img}
                    src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                  />
                </a>
              </span>
            </div>
            <div className={classes.biodata}>
              <Avatar src="https://res.cloudinary.com/ranjitkshah/image/upload/v1609700093/IMG_20200425_064827_2_vc4c0c.jpg" />
              <span className={classes.subbiodata}>
                Ranjit Shah
                <br />
                <a
                  href="https://github.com/ranjitkshah"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className={classes.img}
                    src="https://img.icons8.com/fluent/48/000000/github.png"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/ranjit-shah-b94b7a1a8/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className={classes.img}
                    src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                  />
                </a>
              </span>
            </div>
          </div>
          {/* <a
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
          </a> */}
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
        <span className={clsx(classes.subtitle, classes.subtitle2Radius)}>
          for the community ❤️ by the community 😎
        </span>
        <span></span>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  center: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
  },
  paragraph: {
    ["@media (max-width:420px)"]: {
      fontSize: "12px",
    },
  },
  subtitle: {
    display: "flex",
    fontSize: "1.25rem",
    justifyContent: "center",
    fontStyle: "underline",
    padding: "6px 16px",
    backgroundColor: "#f50057",
    color: "white",
    ["@media (max-width:420px)"]: {
      fontSize: "22px",
    },
  },
  subtitle1Radius: {
    borderRadius: "30px 30px 0px 0px",
  },
  subtitle2Radius: {
    borderRadius: "0px 0px 30px 30px",
    ["@media (max-width:420px)"]: {
      fontSize: "12px",
    },
  },
  biodata: {
    display: "flex",
    margin: "10px 0px ",
    padding: 5,
    alignItems: "center",
  },
  subbiodata: {
    marginLeft: 5,
  },
  img: {
    height: 25,
    width: 25,
  },
  developer: {
    display: "flex"
  }
}));
