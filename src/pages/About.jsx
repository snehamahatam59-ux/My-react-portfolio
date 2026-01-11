import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { Helmet } from 'react-helmet';
import styles from '../styles/About.module.css';

function About() {
  return (
    <>
      {/* ===== SEO META TAGS ===== */}
      <Helmet>
        <title>About Abhilasha Mahatam | Web Developer Intern</title>

        <meta
          name="description"
          content="Learn about Abhilasha Mahatam, a Web Developer Intern passionate about building responsive, user-friendly web applications using modern frontend technologies."
        />

        <meta
          name="keywords"
          content="Abhilasha Mahatam, Web Developer Intern, Frontend & Backend , React Developer, HTML CSS JavaScript, Student Developer"
        />

        <meta name="author" content="Abhilasha Mahatam" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="About Abhilasha Mahatam" />
        <meta
          property="og:description"
          content="Web Developer Intern focused on frontend development and modern web technologies."
        />
        <meta property="og:type" content="profile" />
      </Helmet>

      {/* ===== PAGE CONTENT ===== */}
      <Box className={`${styles.aboutSection} ${styles.aboutContainer}`}>
        <Typography variant="h2" className={styles.title}>
          About Abhilasha Mahatam
        </Typography>

        <Typography variant="h5" className={styles.subtitle}>
          Web Developer Intern
        </Typography>

        {/* Biography */}
        <Typography className={styles.bio}>
          Abhilasha Mahatam is a passionate Web Developer Intern with a strong interest
          in building clean, responsive, and user-friendly web applications. She enjoys
          turning ideas into functional digital experiences using modern frontend
          technologies.
        </Typography>

        <Typography className={styles.bio}>
          She has hands-on experience with HTML, CSS, JavaScript, and React, and is
          continuously improving her skills by working on real-world projects and
          learning best practices in web development, UI design, and performance
          optimization.
        </Typography>

        <Typography className={styles.bio}>
          As an intern, Abhilasha is eager to learn, collaborate with teams, and
          contribute meaningfully to projects while growing as a professional web
          developer.
        </Typography>

        {/* Cards */}
        <Box className={styles.cardContainer}>
          <Card className={styles.card}>
            <CardContent>
              <Typography variant="h6" className={styles.cardTitle}>
                Professional Role
              </Typography>
              <Typography className={styles.cardText}>
                Web Developer Intern focused on frontend development, responsive UI
                design, and building modern web applications using React and related
                technologies.
              </Typography>
            </CardContent>
          </Card>

          <Card className={styles.card}>
            <CardContent>
              <Typography variant="h6" className={styles.cardTitle}>
                Skills & Interests
              </Typography>
              <Typography className={styles.cardText}>
                Frontend Development, React, JavaScript, HTML, CSS, UI/UX basics,
                problem-solving, and continuous learning in modern web technologies.
              </Typography>
            </CardContent>
          </Card>

          <Card className={styles.card}>
            <CardContent>
              <Typography variant="h6" className={styles.cardTitle}>
                Learning & Growth
              </Typography>
              <Typography className={styles.cardText}>
                Actively learning through projects, internships, and self-study,
                with the goal of becoming a skilled full-stack web developer in the
                future.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
}

export default About;