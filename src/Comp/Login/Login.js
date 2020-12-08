import React, { useEffect, useContext, useState } from 'react';
import './Login.css'
import { signInWithGoogle } from '../../services/firebase';
import { UserContext } from '../../providers/UserProvider';
import { Redirect } from 'react-router-dom';
import { Box, Button, Card, Grid } from '@material-ui/core';
export default function Login() {

const user = useContext(UserContext)
const [redirect, setredirect] = useState(null)

useEffect(() => {
    if (user) {
      setredirect('/dashboard')
    }
  }, [user])
  if (redirect) {
    return <Redirect to={redirect} />
}


return (
    <>
      <div className="navbar">
        <header className="nav-header">SDE-SHEET CRACKER</header>
      </div>
      <div className="login">
        <Box boxShadow={3}>
          <Card>
            <Grid className="login-grid"  >
              <img src="https://img.icons8.com/clouds/100/000000/learning.png" />
              <br></br>
              <Button
                variant="contained"
                color="secondary"
                onClick={signInWithGoogle}
              >
                <img alt="user-image" src="https://img.icons8.com/bubbles/50/000000/google-logo.png" />
              &nbsp;
              Login with Google
          </Button>
            </Grid>
          </Card>
        </Box>
      </div>
    </>
  );
}

