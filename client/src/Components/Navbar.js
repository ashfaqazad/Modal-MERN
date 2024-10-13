import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery, useTheme } from '@mui/material';
import Signup from '../Pages/Signup';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  // To detect screen size (for responsiveness)
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // true for mobile screens (md and below)

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="static" className="bg-light">
        <Toolbar>
          {/* Logo placeholder */}
          <div style={{ flexGrow: 1, color: 'black', fontWeight: 'bold' }}>
            AzadDive
          </div>

          {/* If it's mobile view, show the hamburger menu */}
          {isMobile ? (
            <IconButton
              edge="end"
              color="black"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              style={{ marginLeft: 'auto' }} // Ensures it's on the right in mobile view
            >
              <MenuIcon />
            </IconButton>
          ) : (
            // On large screens, show the normal links
            <div style={{ display: 'flex', marginLeft: 'auto' }}>
              <NavLink className="nav-link" exact to="/" style={{ color: 'black', marginRight: '20px' }}>
                Home
              </NavLink>
              <button
                onClick={() => setIsSignupOpen(true)}
                className="btn bg-white text-success mx-1"
                style={{ textDecoration: 'none' }}
              >
                Signup
              </button>

              {/* <NavLink className="nav-link" exact to="/signup" style={{ color: 'black', marginRight: '20px' }}>
                Signup
              </NavLink> */}
              <NavLink className="nav-link" exact to="/login" style={{ color: 'black' }}>
                Login
              </NavLink>
            </div>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for navigation links in mobile view */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <List onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <ListItem button component={NavLink} to="/" exact>
            <ListItemText primary="Home" />
          </ListItem>

          {/* <ListItem button component={NavLink} to="/signup" exact>
            <ListItemText primary="Signup" />
          </ListItem> */}

          <ListItem button onClick={() => setIsSignupOpen(true)}>
            <ListItemText primary="Signup" />
          </ListItem>




          <ListItem button component={NavLink} to="/login" exact>
            <ListItemText primary="Login" />
          </ListItem>
        </List>
      </Drawer>

      {isSignupOpen && <Signup onClose={() => setIsSignupOpen(false)} />}
            
    </>
  );
};

export default Navbar;
