import React from "react";
import {createTheme} from "@mui/material";

const AppTheme = () => {
  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#ffffff',
      }
    },
    });
  return theme;
};

export default AppTheme;