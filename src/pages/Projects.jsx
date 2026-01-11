import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Link
} from '@mui/material';

import SchoolIcon from '@mui/icons-material/School';
import LanguageIcon from '@mui/icons-material/Language';
import AndroidIcon from '@mui/icons-material/Android';
import SecurityIcon from '@mui/icons-material/Security';
import ArticleIcon from '@mui/icons-material/Article';
import StorageIcon from '@mui/icons-material/Storage';
import GroupIcon from '@mui/icons-material/Group';

import styles from '../styles/Projects.module.css';

const TechStack = ({ tech }) => (
  <Box className={styles.tech}>
    {tech.map((t, i) => (
      <Chip key={i} label={t} size="small" style={{color:'rgb(66, 201, 255)'}} />
    ))}
  </Box>
);

function Projects() {
  const projects = [
    {
      title: "MY OWN RESUME",
      description: "A motivated professional with a strong work ethic and a commitment to delivering quality results.",
      tech: ['LateX'],
      link: "https://github.com/snehamahatam59-ux/My-Own-RESUME.git",
      icon: <SchoolIcon className={styles.icon} />,
      color: styles.blue
    },
    {
      title: "PORTFOLIO",
      description: "A clean and responsive portfolio website built using HTML and CSS..",
      tech: ['HTML', 'CSS'],
      link: "https://github.com/snehamahatam59-ux/My-Protfolio.git",
      icon: <LanguageIcon className={styles.icon} />,
      color: styles.green
    },
    {
      title: "MINOR PROJECT",
      description: "A modern digital library website built with HTML, CSS, JavaScript, and Firebase for seamless access and management of books online.",
      tech: ['HTML','CSS', 'JavaScript', 'Firebase', 'Node', 'Express'],
      link: "https://github.com/snehamahatam59-ux/Minor-Project.git",
      icon: <AndroidIcon className={styles.icon} />,
      color: styles.purple
    },
    {
      title: "MAJOR PROJECT",
      description:"AediaX AediaX Edge:Company Website and Enterprise Platform with AI Assistant.  [WORKING ON THIS PROJECT]",
      tech: ['React', 'HTML', 'CSS', 'JavaScript', 'Firebase', 'GitHub'],
      icon: <SecurityIcon className={styles.icon} />,
      color: styles.orange
    }
  ];

  // Create meta description from projects
  const metaDescription = `Professional projects by Abhilasha Mahatam including ${projects.slice(0, 3).map(p => p.title).join(', ')} and more. Explore enterprise solutions, AI systems, and research publications.`;

  return (
    <>
      <Helmet>
        <title>Projects by Abhilasha Mahatam | Web Developer </title>
        <meta 
          name="description" 
          content={metaDescription}
        />
        <meta 
          name="keywords" 
          content="Abhilasha Mahatam projects, web development projects, AI systems, React projects, library management system, research publications"
        />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://abhilashamahatam.com/projects" />
        
        {/* Additional meta tags */}
        <meta name="author" content="Abhilasha Mahatam" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        
        {/* Structured Data for Projects/Portfolio */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Projects Portfolio - Abhilasha Mahatam",
            "description": "Collection of professional projects and contributions by Abhilasha Mahatam",
            "url": "https://abhilashamahatam.com/projects",
            "numberOfItems": projects.length,
            "itemListElement": projects.map((project, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "CreativeWork",
                "name": project.title,
                "description": project.description,
                "url": project.link || "https://abhilashamahatam.com/projects",
                "keywords": project.tech.join(", "),
                "author": {
                  "@type": "Person",
                  "name": "Abhilasha Mahatam"
                }
              }
            }))
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
                "name": "Projects",
                "item": "https://abhilashamahatam.com/projects"
              }
            ]
          })}
        </script>
      </Helmet>

      <Box className={styles.container}>
        <Typography variant="h3" className={styles.title}>
          Work & Contributions
        </Typography>

        <Typography className={styles.subtitle}>
          Professional systems, enterprise platforms, and research work
        </Typography>

        <Box className={styles.cards}>
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`${styles.card} ${project.color}`}
              itemScope
              itemType="https://schema.org/CreativeWork"
            >
              <CardContent>
                {project.icon}
                <Typography 
                  className={styles.cardTitle}
                  itemProp="name"
                >
                  {project.title}
                </Typography>
                <Typography 
                  className={styles.text}
                  itemProp="description"
                >
                  {project.description}
                </Typography>
                <Box itemProp="keywords" style={{ display: 'none' }}>
                  {project.tech.join(', ')}
                </Box>
                <TechStack tech={project.tech} />
                {project.link && (
                  <Link 
                    href={project.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    itemProp="url"
                    aria-label={`Visit ${project.title}`}
                  >
                    {project.title.includes(' MY OWN RESUME') ? 'Visit Platform' : 
                     project.title.includes('PORTFOLIO') ? 'View Website' :
                     project.title.includes('MINOR PROJECTt') ? 'Explore Platform' :
                     project.title.includes('MAJOR PROJECT') ? 'Visit Website' :
                     'View Project'}
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Projects;