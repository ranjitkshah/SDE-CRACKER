import { Fab, makeStyles, TextField } from "@material-ui/core";
import { UserContext } from "../../providers/UserProvider";
import { CheckCircle } from "@material-ui/icons";
import { useForm } from "react-hook-form";

import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";

export default function Connect() {
  const onSubmit = (data) => console.log(data);
  const { register, handleSubmit, watch, errors } = useForm();
  const classes = useStyles();
  const user = useContext(UserContext);
  return (
    <div>
      <Navbar />
      <div className={classes.title}>
        <h3>CONNECT WITH US</h3>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.contactForm}>
          <span className={classes.subtitle}>email</span>
          <TextField
            id="outlined-helperText"
            variant="outlined"
            className={classes.TextField}
            name="email"
            value={user?.email}
            inputRef={register}
            required
            InputProps={{
              readOnly: true,
            }}
          />
          <span className={classes.subtitle}>subject</span>

          <TextField
            id="outlined-helperText"
            variant="outlined"
            className={classes.TextField}
            name="subject"
            inputRef={register}
            required
          />
          <span className={classes.subtitle}>message</span>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={4}
            variant="outlined"
            className={classes.TextField}
            name="message"
            inputRef={register}
            required
          />
        </div>
        <Fab
          variant="extended"
          color="secondary"
          aria-label="add"
          className={classes.margin}
          type="submit"
        >
          <CheckCircle className={classes.extendedIcon} />
          Submit
        </Fab>
      </form>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  title: {
    margin: 20,
    display: "flex",
    justifyContent: "center",
  },
  TextField: {
    margin: 20,
  },
  contactForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  subtitle: {
    margin: "0px 20px",
    backgroundColor: "aqua",
    padding: 10,
    maxWidth: 100,
    borderRadius: "0px 20px 20px 20px",
  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
