import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Typography, TextField, Button, Link } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import styles from '../styles/Contact.module.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailto = `mailto:abhilashamahatam@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    window.location.href = mailto;
  };

  return (
    <>
      {/* ===== SEO META TAGS ===== */}
      <Helmet>
        <title>Contact Abhilasha Mahatam | Web Developer Intern</title>

        <meta
          name="description"
          content="Get in touch with Abhilasha Mahatam, a Web Developer Intern, for internships, projects, or collaboration opportunities."
        />

        <meta
          name="keywords"
          content="Abhilasha Mahatam contact, web developer intern, frontend developer, internship contact, portfolio contact"
        />

        <meta name="author" content="Abhilasha Mahatam" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Abhilasha Mahatam" />
        <meta
          property="og:description"
          content="Contact Abhilasha Mahatam for web development internships, projects, and learning opportunities."
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Abhilasha Mahatam" />
        <meta
          name="twitter:description"
          content="Web Developer Intern open to internships and project collaborations."
        />

        {/* Canonical (update URL after deployment) */}
        <link rel="canonical" href="https://abhilasha-portfolio.vercel.app/contact" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact Abhilasha Mahatam",
              "description": "Contact page for Abhilasha Mahatam - Web Developer Intern",
              "author": {
                "@type": "Person",
                "name": "Abhilasha Mahatam",
                "jobTitle": "Web Developer Intern",
                "email": "abhilashamahatam@gmail.com"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "abhilashamahatam@gmail.com",
                "contactType": "personal",
                "availableLanguage": "English"
              }
            }
          `}
        </script>
      </Helmet>

      {/* ===== PAGE CONTENT ===== */}
      <Box className={styles.contactContainer}>
        <Typography variant="h2" className={styles.title}>
          Contact
        </Typography>

        <Typography className={styles.subtitle}>
          Feel free to reach out for internships, projects, or learning opportunities.
        </Typography>

        {/* Contact Details */}
        <Box className={styles.contactInfo}>
          <Typography>
            <EmailIcon fontSize="small" />{' '}
            <strong>Email:</strong> abhilashamahatam@gmail.com
          </Typography>

          <Typography>
            <WhatsAppIcon fontSize="small" />{' '}
            <Link
              href="https://wa.me/919348239556"
              target="_blank"
              underline="none"
              aria-label="Contact via WhatsApp"
            >
              WhatsApp
            </Link>
          </Typography>
        </Box>

        {/* Contact Form */}
        <Box className={styles.formWrapper}>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
            />

            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
            />

            <TextField
              fullWidth
              label="Subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className={styles.input}
            />

            <TextField
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className={styles.input}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={styles.submitButton}
            >
              Send Message
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
}

export default Contact;