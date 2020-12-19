import { makeStyles } from "@material-ui/core";
import React, { useState, useRef, useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { UserContext } from "../../providers/UserProvider";
// import firebase from "../../services/firebase";
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';

import { useCollectionData } from "react-firebase-hooks/firestore";
import Chatmessage from "../Chatmessage/Chatmessage";

export default function Discussion() {
  const classes = useStyles();
  const user = useContext(UserContext);
  const dummy = useRef();
  const firestore = firebase.firestore();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });
  
  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL, displayName } = user;

    await messagesRef.add({
      
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      displayName,
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar />
      <h3 className={classes.title}>DiSCUSSION FORUM</h3>
      <div>
        <div>
          {messages &&
            messages.map((msg) => <Chatmessage key={msg.id} message={msg} />)}

          <span ref={dummy}></span>
        </div>

        <form onSubmit={sendMessage}>
          <input
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            placeholder="say something nice"
          />
          <button type="submit" disabled={!formValue}>
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
}));
