import { makeStyles, Tooltip } from "@material-ui/core";
import React, { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import clsx from "clsx";

export default function Chatmessage(props) {
  const user = useContext(UserContext);
  const { text, uid, photoURL, displayName, createdAt } = props.message;
  console.log(props.message);
  console.log(createdAt?.toDate());
  const messageClass = uid === user.uid ? "sent" : "received";
  const chatClass = uid === user.uid ? "me" : "other";
  const classes = useStyles();
  return (
    <div>
      <div className={clsx(classes.chatlist, classes[messageClass])}>
        <Tooltip title={displayName}>
          <img
            className={classes.img}
            src={
              photoURL ||
              "https://api.adorable.io/avatars/23/abott@adorable.png"
            }
          />
        </Tooltip>

        <p className={clsx(classes.chat, classes[chatClass])}>{text}</p>
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
  },
  me: {
    borderRadius: "10px 0px 10px 10px",
  },
  other: {
    borderRadius: "0px 10px 10px 10px",
  },
}));
