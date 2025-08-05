import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured online store with cart functionality, user authentication, and payment processing",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "Task Management App",
    description:
      "A productivity application for managing tasks with drag-and-drop interface and team collaboration features",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website built with React and Chakra UI to showcase my projects and skills",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Weather Dashboard",
    description:
      "Real-time weather information application with 5-day forecast and location-based weather data",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
