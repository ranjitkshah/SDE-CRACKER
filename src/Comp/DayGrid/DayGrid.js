import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import firebase from "../../services/firebase";
import QuestionTable from "../QuestionTable/QuestionTable";
import { Avatar, CircularProgress, Fab } from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";
var quotes = require("../../quotes.json");

export default function Daygrid() {
  const [question, setQuestion] = useState([]);
  const [showQuestion, setshowQuestion] = useState(false);
  const [list, setlist] = useState([]);
  const text = quotes[Math.floor(Math.random() * (190 - 2 + 1)) + 2]?.text;

  useEffect(() => {
    getalldata();
  }, []);

  async function getalldata() {
    const snapshot = await firebase
      .firestore()
      .collection("Questions")
      .doc("cb740fb0-3975-11eb-a35b-dfad7671627c")
      .get();
    let data = snapshot.data()["question"];
    console.log(data);
    var result = Object.keys(data).map((key) => [data[key]]);
    result.sort();
    // result.reverse();
    setQuestion(result);
  }
  console.log(question);

  //questionlist
  const questionset = (data) => {
    setshowQuestion(true);
    setlist(data);
    console.log(data);
  };

  console.log(showQuestion);
  const classes = useStyles();

  return (
    <div>
      {question.length ? (
        <div>
          {!showQuestion ? (
            <>
              <div className={classes.title}>
                <span>SDE_CHALLENGE(DAYS 30);</span>
                <span className={classes.quotes}> "{text}" </span>
              </div>
              <Timeline align="alternate" className={classes.Timeline}>
                {question?.map((data, index) => {
                  return (
                    <TimelineItem
                      key={index}
                      onClick={() => questionset(data[0])}
                    >
                      <TimelineSeparator>
                        <TimelineDot>
                         <Avatar className={classes.lettericon} >{index+1}</Avatar>
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                          <Typography variant="h6" component="h1">
                            Day {index + 1}
                          </Typography>
                          <Typography>{data[0][0]}</Typography>
                        </Paper>
                      </TimelineContent>
                    </TimelineItem>
                  );
                })}
              </Timeline>
            </>
          ) : (
            <div className={classes.QuestionTable}>
              <Fab
                color="secondary"
                variant="extended"
                onClick={() => setshowQuestion(false)}
              >
                <ArrowBackIos className={classes.extendedIcon} />
                Back
              </Fab>
              <QuestionTable data={list} />
            </div>
          )}
          <div></div>
        </div>
      ) : (
        <div className={classes.loader}>
          <CircularProgress />
        </div>
      )}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
    borderRadius: "0px 30px 0px 30px",
    backgroundColor: "#f50057",
    color: "white",
    border: "5px solid",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  Timeline: {
    cursor: "pointer",
  },
  QuestionTable: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  loader: {
    display: "flex",
    justifyContent: "center",
    marginTop: 285,
  },
  title: {
    margin: 20,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    fontSize: "32px",
    ["@media (max-width:390px)"]: {
      fontSize: "22px",
    },
  },
  quotes: {
    fontSize: 10,
    margin: 5,
    color: "grey",
  },
  lettericon: {
    backgroundColor: 'white',
    color: '#f50057',
    fontWeight: 'bold',
  }
}));
