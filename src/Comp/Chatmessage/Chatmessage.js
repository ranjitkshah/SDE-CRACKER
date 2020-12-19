import { makeStyles } from "@material-ui/core";
import React, { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";

export default function Chatmessage(props) {
  const user = useContext(UserContext);
  const { text, uid, photoURL, displayName } = props.message;
  console.log(props.message)
  const classes = useStyles();
  return (
    <div>
      <div>
        <p>{displayName}</p>
        <img
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
        />
        <p>{text}</p>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({


}));
