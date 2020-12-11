import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@material-ui/icons/Comment";
import { UserContext } from "../../providers/UserProvider";
import { Help, YouTube } from "@material-ui/icons";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import firebase from "../../services/firebase";
import { Avatar, Divider, ListItemAvatar, Tooltip } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let done = [];

export default function QuestionTable({ data }) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);
  const [open, setOpen] = React.useState(false);

  const user = React.useContext(UserContext);
  console.log(user);

  useEffect(() => {
    getalldata();
  }, []);

  //to get list by user

  async function getalldata() {
    const snapshot = await firebase
      .firestore()
      .collection("questiondone")
      .doc(`${user?.uid}`)
      .get();
    done = snapshot.data() ? snapshot.data()["questionid"] : [];
    console.log(done);
  }

  //to open list
  const handleClick = () => {
    setOpen(!open);
  };

  //for handling toggle event
  const handleToggle = (id) => {
    console.log(id);
    if (done.includes(id)) {
      done = done.filter(function (item) {
        return item !== id;
      });
      toast.error("I think you got some errors 🤔", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      done.push(id);
      toast.success(`🚀 wow! completed total ${done.length} task`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setOpen(!open);
    console.log(done);
    addtoDB(done);
  };

  // add data to db
  const addtoDB = (done) => {
    const db = firebase.firestore();
    console.log(done);
    const donequestion = db
      .collection("questiondone")
      .doc(user.uid)
      .set(
        {
          questionid: done,
        },
        { merge: true }
      )
      .then(function () {
        console.log("written ");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  };

  return (
    <div className={classes.listDiv}>
      <ToastContainer />
      <h1 className={classes.title}> {data[0].toUpperCase()} </h1>
      <List className={classes.root}>
        {data.slice(1).map((data, index) => {
          const labelId = `checkbox-list-label-${index}`;

          return (
            <div key={data.id} >
              <ListItem
                className={classes.listItem}
                disableGutters={true}
                button
                onClick={handleClick}
                
              >
                <Avatar className={classes.index}>{data.id}</Avatar>
                <ListItemText primary={data?.name} />
                {open ? (
                  <ExpandLess className={classes.open} />
                ) : (
                  <ExpandMore className={classes.open} />
                )}
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem
                    onClick={() => handleToggle(data?.id)}
                    button
                    className={classes.nested}
                  >
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={done.includes(data?.id) ? true : false}
                        tabIndex={-1}
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={done.includes(data?.id) ? "Done" : "Not Done"}
                    />
                    <ListItemSecondaryAction>
                      <Tooltip title="question link">
                        <IconButton
                          edge="end"
                          target="_blank"
                          href="https://stackoverflow.com/questions/51940157/how-to-align-horizontal-icon-and-text-in-material-ui"
                          aria-label="comments"
                        >
                          <img
                            className={classes.logo}
                            src="https://img.icons8.com/color/48/000000/ask-question.png"
                          />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="youtube help video">
                        <IconButton edge="end" aria-label="youtube">
                          <img
                            className={classes.logo}
                            src="https://img.icons8.com/fluent/48/000000/youtube-play.png"
                          />
                        </IconButton>
                      </Tooltip>
                    </ListItemSecondaryAction>
                  </ListItem>
                </List>
              </Collapse>
              <Divider />
            </div>
          );
        })}
      </List>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 460,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  index: {
    margin: 10,
  },
  title: {
    backgroundColor: "aqua",
    padding: 10,
    borderRadius: "0px 20px 20px 20px",
    fontSize: "1.5rem",
  },
  logo: {
    maxWidth: 30,
    margin: "0px 10px",
  },
  open: {
    margin: 10,
  },
  listItem: {
    backgroundColor: "aqua",
    borderRadius: "0px 30px",
    margin: "10px 0px",
  },
}));
