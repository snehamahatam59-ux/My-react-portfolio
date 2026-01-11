// pages/NotFound.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import HomeIcon from '@mui/icons-material/Home';

import styles from '../styles/NotFound.module.css';

function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Abhilasha Mahatam</title>
        <meta 
          name="description" 
          content="The page you're looking for doesn't exist or has been moved. Return to Abhilasha Mahatam's portfolio website."
        />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://your-portfolio-url" />
      </Helmet>

      <Container maxWidth="md">
        <Box className={styles.container}>
          <Box className={styles.content}>
            <ErrorOutlineIcon className={styles.icon} />

            <Typography variant="h1" className={styles.errorCode}>
              404
            </Typography>

            <Typography variant="h4" className={styles.title} gutterBottom>
              Page Not Found
            </Typography>

            <Typography variant="body1" className={styles.message} paragraph>
              The page you're looking for doesn't exist or may have been moved.
            </Typography>

            <Typography variant="body2" className={styles.suggestion} paragraph>
              You can return to the homepage or explore other sections of my portfolio.
            </Typography>

            <Box className={styles.actions}>
              <Button
                component={RouterLink}
                to="/"
                variant="contained"
                startIcon={<HomeIcon />}
                className={styles.button}
              >
                Go to Homepage
              </Button>

              <Button
                component={RouterLink}
                to="/projects"
                variant="outlined"
                className={styles.button}
              >
                View Projects
              </Button>
            </Box>

            <Box className={styles.quickLinks}>
              <Typography variant="body2" className={styles.linksTitle}>
                Quick Links:
              </Typography>

              <Box className={styles.linkList}>
                <Button component={RouterLink} to="/about" className={styles.link}>
                  About
                </Button>
                <Button component={RouterLink} to="/skills" className={styles.link}>
                  Skills
                </Button>
                <Button component={RouterLink} to="/projects" className={styles.link}>
                  Projects
                </Button>
                <Button component={RouterLink} to="/contact" className={styles.link}>
                  Contact
                </Button>
              </Box>
            </Box>

          </Box>
        </Box>
      </Container>
    </>
  );
}

export default NotFound;