import React, { useRef, useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Controller, useForm } from 'react-hook-form';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Alert, AlertTitle, Collapse, Snackbar} from '@mui/material';
import {useNavigate} from "react-router-dom";

const theme = createTheme();

function Login() {
  const [emailError, setEmailError] = useState(false);
  const [open, setOpen] = useState(false);
  const emailRef = useRef(null);
  const EmailVaildPattern = '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$';
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const onClick = () => {
    setOpen(!open);
  };

  const handleChange = () => {
    if (emailRef.current) {
      const ref = emailRef.current;
      if (!ref.validity.valid) {
        setErrorMessage(emailRef?.current?.validationMessage);
        setEmailError(true);
      } else {
        setEmailError(false);
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        maxWidth="xs"
        className="test"
        sx={{
          marginTop: 8,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <img src="./../../images/title_large.svg" />

        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Snackbar open={open} anchorOrigin={{vertical:'top', horizontal:'left'}}>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            <strong>メールアドレスかパスワードが間違っています</strong>
          </Alert>
        </Snackbar>

        <Box component="form" noValidate sx={{ mt: 1 }}>

          <TextField
            error={emailError}
            required
            margin="normal"
            fullWidth
            label={(emailError === false) ? 'メールアドレス' : 'Error'}
            name="email"
            type="email"
            autoComplete="email"
            inputProps={{ pattern: EmailVaildPattern }}
            inputRef={emailRef}
            autoFocus
            helperText={(emailError === true) ? errorMessage : ''}
            onChange={handleChange}
          />
          <TextField
            required
            margin="normal"
            fullWidth
            name="password"
            label="パスワード"
            type="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={onClick}
          >
            ログイン
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" onClick={() => {navigate('../account-create')}}>
                新規登録
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                パスワードを忘れた方
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </ThemeProvider>
  );
}

export default Login;
