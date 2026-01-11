import React from 'react';
import { Box, Typography, Link, Tooltip } from '@mui/material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import styles from '../styles/Footer.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <Box
      component="footer"
      className={styles.footer}
      style={{ background: 'rgb(3, 11, 30)' }}
    >
      {/* Top Section */}
      <Box className={styles.topFooter}>

        {/* Navigation */}
        <Box className={styles.navLinks}>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path} className={styles.navLink}>
              {link.name}
            </Link>
          ))}
        </Box>

        {/* Social Links */}
        <Box className={styles.socialLinks}>

          <Tooltip title="LinkedIn">
            <Link
              href="https://www.linkedin.com/"
              target="_blank"
              className={styles.socialLink}
            >
              <LinkedInIcon />
            </Link>
          </Tooltip>

          <Tooltip title="Email">
            <Link
              href="mailto:abhilashamahatam@gmail.com"
              className={styles.socialLink}
            >
              <EmailIcon />
            </Link>
          </Tooltip>

          <Tooltip title="Phone / WhatsApp">
            <Link
              href="tel:+919348239556"
              className={styles.socialLink}
            >
              <PhoneIcon />
            </Link>
          </Tooltip>

          <Tooltip title="Instagram">
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              className={styles.socialLink}
            >
              <InstagramIcon />
            </Link>
          </Tooltip>

          <Tooltip title="GitHub">
            <Link
              href="https://github.com/"
              target="_blank"
              className={styles.socialLink}
            >
              <GitHubIcon />
            </Link>
          </Tooltip>

          <Tooltip title="India">
            <Link
              href="https://maps.google.com/?q=India"
              target="_blank"
              className={styles.socialLink}
            >
              <LocationOnIcon />
            </Link>
          </Tooltip>

        </Box>
      </Box>

      {/* Divider */}
      <Box className={styles.divider}></Box>

      {/* Copyright */}
      <Typography variant="body2" className={styles.text}>
        © {currentYear} <strong>Abhilasha Mahatam</strong> · Web Developer Intern
      </Typography>
    </Box>
  );
}

export default Footer;
