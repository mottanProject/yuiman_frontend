import React from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Account,
  ListItem,
  List,
  ListItemButton,
  ListItemText
} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useNavigate} from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined';
import PhotoLibraryOutlinedIcon from '@mui/icons-material/PhotoLibraryOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const AppBars = () => {
  const navigate = useNavigate();

  return (
    <>
    <AppBar position="static" sx={{ justifyContent: 'flex-end' }}>
      <Toolbar disableGuttersv sx={{ width: '100%' }}>
        <Typography>YIMAN WORKSHOP</Typography>
        <AccountCircleIcon sx={{ justifyContent: 'flex-end' }}/>
      </Toolbar>
    </AppBar>
      <List sx={{ width: '20%' }}>
        <ListItem key="home" disablePadding>
          <ListItemButton onClick={}>
            <HomeOutlinedIcon />
            <ListItemText primary="ホーム" />
          </ListItemButton>
        </ListItem>
        <ListItem key="review" disablePadding>
          <ListItemButton>
            <RecordVoiceOverOutlinedIcon />
            <ListItemText primary="レビュー管理" />
          </ListItemButton>
        </ListItem>
        <ListItem key="albam" disablePadding>
          <ListItemButton>
            <PhotoLibraryOutlinedIcon />
            <ListItemText primary="アルバム" />
          </ListItemButton>
        </ListItem>
        <ListItem key="video" disablePadding>
          <ListItemButton>
            <OndemandVideoOutlinedIcon />
            <ListItemText primary="動画管理" />
          </ListItemButton>
        </ListItem>
        <ListItem key="account-setting" disablePadding>
          <ListItemButton>
            <AccountCircleOutlinedIcon />
            <ListItemText primary="アカウント管理" />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
};

export default AppBars;