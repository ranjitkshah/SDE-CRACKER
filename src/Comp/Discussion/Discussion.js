import { makeStyles } from "@material-ui/core";
import React, { useState, useRef, useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { UserContext } from "../../providers/UserProvider";
// import firebase from "../../services/firebase";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";

import { useCollectionData } from "react-firebase-hooks/firestore";
import Chatmessage from "../Chatmessage/Chatmessage";

export default function Discussion() {
  const classes = useStyles();
  const user = useContext(UserContext);
  const dummy = useRef();
  const firestore = firebase.firestore();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt");

  const [messages] = useCollectionData(query, { idField: "id" });
  console.log(messages)

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL, displayName, email } = user;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      displayName,
      uid,
      photoURL,
      email
    });


    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar />
      <h3 className={classes.title}>DiSCUSSION FORUM</h3>
      <div className={classes.section}>
        <div className={classes.message}>
          {messages &&
            messages.map((msg) => <Chatmessage key={msg.id} message={msg} />)}

          <span ref={dummy}></span>
        </div>

        <form className={classes.form} onSubmit={sendMessage}>
          <input
            value={formValue}
            className={classes.input}
            onChange={(e) => setFormValue(e.target.value)}
            placeholder="say something nice"
          />
          &nbsp;
          <button
            className={classes.button}
            type="submit"
            disabled={!formValue}
          >
            🕊️
          </button>
        </form>
      </div>
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
  section: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "aqua",
  },
  message: {
    padding: 10,
    height: "67vh",
    display: "flex",
    flexDirection: "column",
    overflowY: "scroll",
  },
  form: {
    width: "100%",
    display: "flex",
  },
  input: {
    width: "100%",
    height: 23,
  },
  button: {
    width: 97,
  },
}));
