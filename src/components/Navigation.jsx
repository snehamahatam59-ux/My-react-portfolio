import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png';
import styles from '../styles/Navigation.module.css';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Box className={styles.drawerContainer}>
      <Box className={styles.drawerLogo}>
        <img src={Logo} alt="Logo" className={styles.drawerLogoImage} />
        <Typography className={styles.drawerLogoText}>
          Amresh Bhuyan
        </Typography>
      </Box>

      <List className={styles.drawerNavList}>
        {navItems.map(item => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              onClick={handleDrawerToggle}
              className={`${styles.drawerNavItem} ${
                location.pathname === item.path ? styles.drawerActive : ''
              }`}
              style={{color:"white"}}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        className={styles.appBar}
        sx={{ background: 'rgb(3, 11, 30)' }}
      >
        <Toolbar className={styles.toolbar}>
          {/* Mobile Menu */}
          <IconButton
            edge="start"
            onClick={handleDrawerToggle}
            className={styles.menuButton}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <Link to="/" className={styles.logoContainer}>
            <img src={Logo} alt="Logo" className={styles.logoImage} />
            <Typography className={styles.logoText}>
              Abhilasha Mahatam
            </Typography>
          </Link>

          {/* Desktop Links */}
          <Box className={styles.navLinks}>
            {navItems.map(item => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.activeLink : ''}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            backgroundColor: 'rgb(3, 11, 30)',
            width: 260,
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}

export default Navigation;
