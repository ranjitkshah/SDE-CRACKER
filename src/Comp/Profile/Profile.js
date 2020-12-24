import {
  Avatar,
  Card,
  CircularProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../providers/UserProvider";
import Navbar from "../Navbar/Navbar";
import firebase from "../../services/firebase";

export default function Profile() {
  const user = useContext(UserContext);
  const [totalQuestion, settotalQuestion] = useState([]);
  const [allUsersDone, setallUsersDone] = useState([])
  const classes = useStyles();
  useEffect(() => {
    getalldata();
  }, []);

  async function getalldata() {
    const snapshot1 = await firebase
      .firestore()
      .collection("questiondone")
      .doc(`${user?.uid}`)
      .get();

    settotalQuestion(snapshot1.data()["questionid"]);

    const snapshot2 = await firebase
    .firestore()
    .collection("questiondone")
    .get();

    setallUsersDone(snapshot2.docs.map((doc) => doc.data()["questionid"].length))
    
  }
  const distinctUsersDone=[ ...new Set(allUsersDone?.sort(function(a, b){return b-a}))]
  const userRank = distinctUsersDone.indexOf(totalQuestion?.length)+1;
  
  return (
    <div>
      <Navbar />
      <h3 className={classes.title}>MY PROFILE</h3>
      <div>
        {!!user ? (
          <Card className={classes.profileCard}>
            <Avatar className={classes.avatar} src={user?.photoURL} />
            <div className={classes.profileData}>
              <Typography>{user?.displayName}</Typography>
              <Typography>
                <b> email-id </b> : {user?.email}
              </Typography>
              <Typography>
                <b> attempted </b>: {totalQuestion.length} tasks
              </Typography>
              <Typography>
                <b> your rank 🏆 </b>: {userRank} out of {allUsersDone.length} users
              </Typography>
            </div>
          </Card>
        ) : (
          <div className={classes.loader}>
            <CircularProgress />
          </div>
        )}
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  profileCard: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    margin: 20,
    wordBreak: "break-all",
    ["@media (max-width:390px)"]: {
      flexDirection: "column",
      alignItems: "center"
    },
  },
  avatar: {
    height: 100,
    width: 100,
    margin: 10,
  },
  profileData: {
    margin: 10,
    display: "flex",
    flexDirection: "column",
  },
  loader: {
    display: "flex",
    justifyContent: "center",
    marginTop: 285,
  },
  title: {
    margin: 20,
  },
}));
