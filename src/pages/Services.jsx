import React from 'react';
import { Helmet } from 'react-helmet';
import { Box, Typography, Card, CardContent, Chip } from '@mui/material';

import WebIcon from '@mui/icons-material/Language';
import MobileIcon from '@mui/icons-material/Smartphone';
import CloudIcon from '@mui/icons-material/Cloud';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SecurityIcon from '@mui/icons-material/Security';
import SchoolIcon from '@mui/icons-material/School';

import styles from '../styles/Services.module.css';

const Tech = ({ items }) => (
  <Box className={styles.tech}>
    {items.map((item, i) => (
      <Chip 
        key={i} 
        label={item} 
        size="small" 
        style={{color:'rgb(66, 201, 255)'}} 
        aria-label={`Technology: ${item}`}
      />
    ))}
  </Box>
);

function Services() {
  const services = [
    {
      title: "Web Application Development",
      description: "Design and development of responsive, SEO-optimized, and high-performance web applications for enterprises and institutions.",
      tech: ['React', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Sitemap'],
      icon: <WebIcon className={styles.icon} />,
      color: styles.blue,
      category: "Web Development"
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile applications for Android and iOS with seamless UI, performance, and scalability.",
      tech: ['Expo', 'React Native', 'Android', 'iOS', 'XML'],
      icon: <MobileIcon className={styles.icon} />,
      color: styles.green,
      category: "Mobile Development"
    },
    {
      title: "Backend & Cloud Solutions",
      description: "Secure backend architecture, APIs, authentication systems, and real-time databases for modern applications.",
      tech: ['Node.js', 'Express', 'Firebase', 'REST API'],
      icon: <CloudIcon className={styles.icon} />,
      color: styles.purple,
      category: "Backend Development"
    },
    {
      title: "AI & Intelligent Systems",
      description: "Development of AI-driven systems including analytics, automation, and decision-support platforms.",
      tech: ['Python', 'Machine Learning', 'AI Models'],
      icon: <PsychologyIcon className={styles.icon} />,
      color: styles.orange,
      category: "Artificial Intelligence"
    },
    {
      title: "Security & Verification Systems",
      description: "Identity verification, data protection, and secure access systems designed for sensitive enterprise environments.",
      tech: ['Security', 'Authentication', 'Verification'],
      icon: <SecurityIcon className={styles.icon} />,
      color: styles.red,
      category: "Cybersecurity"
    },
    {
      title: "Training & Mentorship",
      description: "Professional training and mentorship for interns and teams in full-stack development and real-world project workflows.",
      tech: ['Full Stack', 'Git', 'Industry Practices'],
      icon: <SchoolIcon className={styles.icon} />,
      color: styles.dark,
      category: "Education"
    }
  ];

  // Create meta description from services
  const metaDescription = `Professional services by Amresh Bhuyan including ${services.map(s => s.category).join(', ')}. Offering enterprise-grade solutions in web, mobile, AI, and security.`;

  // Create keywords from all tech stacks
  const allKeywords = Array.from(new Set(services.flatMap(s => s.tech))).join(', ');

  return (
    <>
      <Helmet>
        <title>Services | Abhilasha Mahatam - Web, Mobile, AI & Security Solutions</title>
        <meta 
          name="description" 
          content={metaDescription}
        />
        <meta 
          name="keywords" 
          content={`Abhilasha Mahatam services, ${allKeywords}, web development, mobile app development, AI solutions, cybersecurity, training, mentorship`}
        />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://abhilashamahatam.com/services" />
        
        {/* Additional meta tags */}
        <meta name="author" content="Abhilasha Mahatam" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="subject" content="Web Development, Mobile Development, AI Solutions" />
        <meta name="classification" content="Technology Services" />
        
        {/* Structured Data for Services */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Amresh Bhuyan Development Services",
            "description": "Professional web, mobile, AI, and security development services",
            "url": "https://abhilashamahatam.com/services",
            "provider": {
              "@type": "Person",
              "name": "Abhilasha Mahatam",
              "jobTitle": "Web Developer & AI Engineer",
              "email": "abhilashamahatam@gmail.com",
              "url": "https://abhilashamahatam.com"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Development Services",
              "itemListElement": services.map((service, index) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": service.title,
                  "description": service.description,
                  "category": service.category,
                  "serviceType": service.tech.join(", "),
                  "provider": {
                    "@type": "Person",
                    "name": "Abhilasha Mahatam"
                  }
                },
                "position": index + 1
              }))
            }
          })}
        </script>
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://abhilashamahatam.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://abhilashamahatam.com/services"
              }
            ]
          })}
        </script>
      </Helmet>

      <Box className={styles.container}>
        <Typography variant="h3" className={styles.title}>
          Services
        </Typography>

        <Typography className={styles.subtitle}>
          Building scalable, secure, and intelligent digital solutions
        </Typography>

        <Box className={styles.cards}>
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`${styles.card} ${service.color}`}
              itemScope
              itemType="https://schema.org/Service"
              aria-labelledby={`service-title-${index}`}
            >
              <CardContent>
                <div aria-hidden="true">
                  {service.icon}
                </div>
                <Typography 
                  id={`service-title-${index}`}
                  className={styles.cardTitle}
                  itemProp="name"
                >
                  {service.title}
                </Typography>
                <Typography 
                  className={styles.text}
                  itemProp="description"
                >
                  {service.description}
                </Typography>
                <Box 
                  itemProp="serviceType" 
                  style={{ display: 'none' }}
                >
                  {service.tech.join(', ')}
                </Box>
                <Box 
                  itemProp="category" 
                  style={{ display: 'none' }}
                >
                  {service.category}
                </Box>
                <Tech items={service.tech} />
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Services;