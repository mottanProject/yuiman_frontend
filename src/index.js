import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter, Outlet, Route, Routes,
} from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Home from './components/home/Home';
import Login from './components/login/Login';
import AppBars from './components/common/AppBars';
import AccountCreate from './components/account/AccountCreate';

const container = document.getElementById('root');
const root = createRoot(container);
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ffffff',
    },
  },
});

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/*<AppBars />*/}
      {/*<Outlet />*/}
      <Routes>
        <Route path="/">
          <Route path="login" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="account-create" element={<AccountCreate />} />
          <Route path="account-setting" element={<Home />} />
        </Route>
      </Routes>
    </ThemeProvider>
  </BrowserRouter>,
);
