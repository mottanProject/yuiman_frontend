import React from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter, Outlet, Route, Routes} from 'react-router-dom';
import Home from './components/home/Home';
import AppBars from "./components/common/AppBars";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";

const container = document.getElementById('root');
const root = createRoot(container);
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ffffff',
    }
  },
});

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppBars />
    <Outlet />
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
    </ThemeProvider>
  </BrowserRouter>,
);
