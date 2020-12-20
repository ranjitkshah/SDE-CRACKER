import {
  Avatar,
  Card,
  CircularProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { UserContext } from "../../providers/UserProvider";
import Navbar from "../Navbar/Navbar";
import firebase from "../../services/firebase";

export default function Profile() {
  const user = useContext(UserContext);
  console.log(user);
  const classes = useStyles();

  useEffect(() => {
    getalldata();
  }, []);
  console.log(user?.uid);
  async function getalldata() {
    const snapshot = await firebase
      .firestore()
      .collection("questiondone")
      .get();

    let idlist = snapshot.docs.map((doc) => doc.id);

    console.log( snapshot.docs.map(doc => doc.data()))
  }

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
              <Typography>Email-id : {user?.email}</Typography>
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
