import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Avatar, Typography, List, ListItem, ListItemText, ListItemIcon, Button, IconButton, Drawer, useMediaQuery, useTheme } from '@mui/material';
import { Home, Work, Description, ContactMail, Menu as MenuIcon } from '@mui/icons-material';
import { useDrawer } from './DrawerContext';
import resume from "../assets/resume.pdf"

const DrawerForDesktopView = () => {
  return (
    <Box sx={{
      width: { xs: '80%', sm: 250 },
      backgroundColor: '#111',
      color: 'white',
      height: '98vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 2,
      fontFamily: 'Poppins, sans-serif',
      position: 'fixed',
      alignItems: 'center',
    }}>

      {/* profile  */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Box marginBottom={20} marginTop={5} justifyContent='center'>
          <Avatar src="https://avatars.githubusercontent.com/u/60479622?v=4" alt="Profile" sx={{ width: 150, height: 150, mb: 2, backgroundColor: "#fff" }} />
          <Typography variant="h4" sx={{ color: "#fff" }} >Jaya Gupta</Typography>
        </Box>


        {/* list of tabs */}
        <List component="nav" sx={{ flexGrow: 1, width: '100%' }}>
          <ListItem button component={Link} to="/">
            <ListItemIcon sx={{ color: 'white' }}><Home /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/workExperience">
            <ListItemIcon sx={{ color: 'white' }}><Work /></ListItemIcon>
            <ListItemText primary="Work Experience" />
          </ListItem>
          <ListItem button component={Link} to="/educationAndExperience">
            <ListItemIcon sx={{ color: 'white' }}><Description /></ListItemIcon>
            <ListItemText primary="Education and Skills" />
          </ListItem>
          <ListItem button component={Link} to="/contact">
            <ListItemIcon sx={{ color: 'white' }}><ContactMail /></ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', paddingBottom: "15px" }}>

            <Button variant="outlined"

              component="a"
              href={resume}
              download="Jaya.pdf"
              sx={{
                marginTop: "10px",
                borderColor: '#20C997', color: '#20C997', '&:hover': { backgroundColor: '#20C997', color: '#fff' },
                padding: "10px",
                fontFamily: "Poppins",
                width: "150px",
                border: "3px solid ",
                fontSize: "12px",

              }}
            >

              Download CSV

            </Button>
          </Box>
        </List>
      </Box>


      {/* footer */}
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', paddingBottom: "15px" }}>

        <Typography>Created by <b>JAYA GUPTA</b></Typography>
      </Box>

    </Box>
  )
}

const Sidebar = () => {
  const { openDrawer, toggleDrawer } = useDrawer();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  return (
    <>
      {isMobile ? (
        <Box>
          <Box sx={{ position: 'fixed', width: '100%', backgroundColor: '#111', color: 'white', padding: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', backgroundColor: '#111', color: 'white', padding: 1 }}>
            <Typography sx={{ flexGrow: 1, color: "#fff", fontFamily: "Poppins", textDecoration:"none" }} component={Link} to="/">Jaya Gupta</Typography>
              <IconButton edge="end" color="inherit" onClick={toggleDrawer} sx={{ mr: 3 }}>
                <MenuIcon />
              </IconButton>
            </Box>

          </Box>
          <Drawer
            anchor="right"
            open={openDrawer}
            onClose={toggleDrawer}
            PaperProps={{
              sx: {
                width: 'calc(100% - 58px)',
                height: 'calc(100% - 56px)', // Adjust if needed for header height
                position: 'fixed',
                top: 56, // Adjust if needed for header height
                opacity:".9",

              }
            }}
          >
      <DrawerForDesktopView/>
          </Drawer>

        </Box>
      ) : (

        <DrawerForDesktopView />

      )}
    </>
  );
}

export default Sidebar;
