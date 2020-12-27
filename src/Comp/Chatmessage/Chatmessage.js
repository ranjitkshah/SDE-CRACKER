import { makeStyles, Tooltip } from "@material-ui/core";
import React, { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import clsx from "clsx";
import moment from "moment"

export default function Chatmessage(props) {
  const user = useContext(UserContext);
  const { text, uid, photoURL, displayName, createdAt, email } = props.message;
  const info = `${displayName}\n${email}`
  const messageClass = uid === user.uid ? "sent" : "received";
  const msgDate= moment(createdAt?.toDate()).calendar()  
  const chatClass = uid === user.uid ? "me" : "other";
  const classes = useStyles();
  
  return (
    <div>
      <div className={clsx(classes.chatlist, classes[messageClass])}>
        <Tooltip enterTouchDelay={100} arrow title={info}>
          <img
            className={classes.img}
            src={
              photoURL ||
              "https://api.adorable.io/avatars/23/abott@adorable.png"
            }
          />
        </Tooltip>
        <p className={clsx(classes.chat, classes[chatClass])}>{text}
        <br/>
        <p className={classes.time}>{msgDate}</p>
        </p>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  img: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    margin: "2px 5px",
  },
  sent: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row-reverse",
  },
  received: {
    display: "flex",
    alignItems: "center",
  },
  chat: {
    backgroundColor: "white",
    padding: 5,
    fontSize: 12,
    border: "2px solid gray"
  },
  me: {
    borderRadius: "10px 0px 10px 10px",
  },
  other: {
    borderRadius: "0px 10px 10px 10px",
  },
  time: {
    fontSize: 7,
    margin: 1,
    padding: 2,
    color: "gray"
  }
}));
