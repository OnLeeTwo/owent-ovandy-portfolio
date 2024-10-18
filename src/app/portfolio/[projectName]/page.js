"use client";

import { useEffect, useState } from "react";

const ProjectDetail = ({ params }) => {
  const project = params.projectName;
  const [projectDetails, setProjectDetails] = useState(null);

  useEffect(() => {
    if (project) {
      const details = {
        sucomart: {
          title: "Sucomart",
          description: "A sustainable e-commerce market for everyone.",
          link: "https://sucomart.vercel.app",
          screenshots: [
            "/assets/images/sucomart-1.webp",
            "/assets/images/sucomart-2.webp",
            "/assets/images/sucomart-3.webp",
          ],
          technologies: ["Next.js", "Flask", "MySQL", "ChakraUI"],
          background:
            "In today's fast-paced world, many people seek fresh, locally sourced products while supporting sustainable practices and reducing their environmental footprint. However, connecting directly with local farmers can be challenging for consumers, while small-scale farmers often struggle to reach a broader customer base. Sucomart was founded to bridge this gap, offering a platform that promotes sustainability and facilitates direct trade between local farmers and eco-conscious consumers.",
          responsibilites: [
            "UI/UX Development: Build an intuitive, eco-friendly user interface using Next.js.",
            "Responsive Design: Ensure the website works across all devices (desktop, mobile, tablet).",
            "Dynamic Content: Implement pages for product listings, farmer profiles, and customer dashboards.",
            "Form Handling: Build and validate forms for registration, product uploads, and checkout.",
            "API Integration: Connect the front-end to back-end APIs for fetching data.",
            "API Development: Create RESTful APIs for user management, products, orders, and payments.",
            "Database Management: Design and manage the database for products, users, and orders (MySQL).",
            "Authentication: Implement secure JWT-based user login and role-based access control.",
            "Search & Filters: Build advanced search and filtering for products.",
            "Team Collaboration: Work with designers and product managers to deliver features.",
            "Code Reviews: Participate in code reviews and maintain best practices.",
            "Deployment: Manage website deployment and monitoring using platforms like Vercel.",
          ],
        },
        "pokemon-viewer": {
          title: "Pokemon Viewer",
          description: "A frontend application to view Pokemon details.",
          screenshots: [
            "/assets/images/pokemon-viewer-1.png",
            "/assets/images/pokemon-viewer-2.png",
            "/assets/images/pokemon-viewer-3.png",
          ],
          link: "https://pokemon-viewer-next-js.vercel.app/",
          technologies: ["Next.js", "PokeAPI"],
          background:
            "Pokemon Viewer is an online platform where users can browse and view all Pokémon from the official Pokédex. It allows users to search for Pokémon by name or number and explore detailed stats, abilities, and evolutions. The website is designed to provide an intuitive and fun way for Pokémon enthusiasts to explore their favorite creatures and discover new ones.",
          responsibilities: [
            "UI/UX Development: Build an engaging and user-friendly interface to display Pokémon details using React/Next.js.",
            "Responsive Design: Ensure the website layout is fully responsive and works well on desktop, tablet, and mobile devices.",
            "Dynamic Content Rendering: Implement dynamic pages for Pokémon details, including stats, abilities, and evolutions.",
            "Search & Filter Functionality: Create a search and filter feature that allows users to find Pokémon by name, type, or number.",
            "API Integration: Connect the front-end to the Pokémon API to fetch and display Pokémon data in real-time.",
            "Performance Optimization: Optimize images, API requests, and ensure fast loading times for a smooth user experience.",
            "Accessibility: Ensure the website is accessible to all users, following best practices for web accessibility.",
            "Cross-Browser Compatibility: Ensure the website works seamlessly across different browsers.",
            "Collaboration: Work closely with back-end developers to ensure smooth data integration and with designers to match the intended visual design.",
          ],
        },
        "zoo-management-api": {
          title: "Zoo Management API",
          description: "A backend API for managing zoo data.",
          screenshots: ["/assets/images/zoo-management-api-1.png"],
          link: ["https://github.com/OnLeeTwo/module-6-OnLeeTwo/"],
          technologies: ["Flask"],
          background: [
            "Zoo Management API is a comprehensive backend system designed to manage a zoo’s operations. It enables the registration of animals, creation of detailed animal profiles (including sex, age, and species), and allows for tracking zoo profits, visitor feedback, and other key metrics. The API provides the foundation for a zoo's digital operations, making it easy to manage animals and operational data efficiently.",
          ],
          responsibilites: [
            "API Design: Design RESTful API endpoints to handle operations for registering animals, managing their profiles, and tracking data such as sex, age, and species.",
            "Feedback System: Build endpoints for recording and managing visitor feedback.",
            "Validation: Ensure all API inputs are validated using tools like Cerberus or Marshmallow.",
            "Error Handling: Implement robust error handling to ensure proper responses for invalid data or system issues.",
            "Performance Optimization: Optimize database queries and API response times to ensure efficient data handling.",
            "Documentation: Document all API routes and usage examples using tools like Swagger or Postman.",
          ],
        },
      };

      setProjectDetails(details[project]);
    }
  }, [project]);

  if (!projectDetails) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <article className="about active" data-page="about">
        <h2 className="h2 article-title">{projectDetails.title}</h2>
        <h3 className="description">
          {projectDetails.description}
          <br />
        </h3>
        <a href={projectDetails.link}>
          <p>Project link</p>
        </a>
        <div className="screenshots has-scrollbar">
          {projectDetails.screenshots.map((screenshot, index) => (
            <img
              key={index}
              src={screenshot}
              alt={`${project.title} screenshot ${index + 1}`}
            />
          ))}
        </div>
        <ul className="technologies">
          {projectDetails.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <p className="about-text">{projectDetails.background}</p>
        <h4 className="h4 project-details-title">Responsibilites:</h4>
        <ul className="responsibilities-list">
          {projectDetails.responsibilites.map((responsibilites) => (
            <li key={responsibilites}>{responsibilites}</li>
          ))}
        </ul>
      </article>
    </div>
  );
};

export default ProjectDetail;