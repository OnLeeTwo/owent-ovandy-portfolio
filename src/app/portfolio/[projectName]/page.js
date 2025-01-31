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
          responsibilities: [
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
            "Zoo Management API is a comprehensive backend system designed to manage a zoo operations. It enables the registration of animals, creation of detailed animal profiles (including sex, age, and species), and allows for tracking zoo profits, visitor feedback, and other key metrics. The API provides the foundation for a zoo's digital operations, making it easy to manage animals and operational data efficiently.",
          ],
          responsibilities: [
            "API Design: Design RESTful API endpoints to handle operations for registering animals, managing their profiles, and tracking data such as sex, age, and species.",
            "Feedback System: Build endpoints for recording and managing visitor feedback.",
            "Validation: Ensure all API inputs are validated using tools like Cerberus or Marshmallow.",
            "Error Handling: Implement robust error handling to ensure proper responses for invalid data or system issues.",
            "Performance Optimization: Optimize database queries and API response times to ensure efficient data handling.",
            "Documentation: Document all API routes and usage examples using swagger",
          ],
        },
        "delish-app": {
          title: "Delish App",
          description: "A Restaurant Discovery App.",
          screenshots: [
            "/assets/images/delish-1.png",
            "/assets/images/delish-2.png",
            "/assets/images/delish-3.png",
          ],
          link: ["https://github.com/OnLeeTwo/backend-delish-app"],
          technologies: ["Next.js", "Flask", "MySQL"],
          background: [
            "Delish is an app that offer seamless restaurant discovery with real-time availability and easy reservations, along with reliable reviews and personalized recommendations based on user preferences and past behavior.",
          ],
          responsibilities: [
            "Backend developer: Develop RESTful API endpoints to handle operations such as managing restaurant profiles, reservations, user reviews, and media uploads.",
            "Review and Media Features: Implement backend functionality for user review submissions and media file uploads using Flask and R2 bucket.",
            "Input Validation: Ensure all API inputs are properly validated using tools like Cerberus",
            "Error Management: Build robust error management systems to deliver accurate responses for invalid data or unexpected issues.",
            "Performance Enhancement: Fine-tune database queries and API responses to deliver efficient and reliable functionality.",
            "Documentation: Prepare detailed API documentation and provide usage examples in Postman to support team collaboration.",
          ],
        },
        sahabatajar: {
          title: "SahabatAjar.id",
          description: "A fast and easy to use online learning platform.",
          screenshots: [
            "/assets/images/sahabatajar-1.png",
            "/assets/images/sahabatajar-2.png",
            "/assets/images/sahabatajar-3.png",
          ],
          link: ["https://github.com/tobiasagyasta/frontend-delish-app"],
          technologies: ["Next.js", "Flask", "MySQL"],
          background: [
            "SahabatAjar.id is a web-based Learning Management System (LMS) designed to empower educational institutions, instructors, and students by simplifying complex administrative and learning processes. This platform provides administrators with tools to manage institutes, courses, and enrollments efficiently. Instructors can create, manage, and assess courses and modules, while students gain seamless access to structured learning experiences, enhancing their educational journey. The system is built to be flexible and scalable, accommodating the diverse needs of modern education. ",
          ],
          responsibilities: [
            "UI/UX Development: Design an intuitive and user-friendly interface using Next.js, ShadCN, and Tailwind CSS.",
            "Responsive Design: Ensure a seamless experience across devices (desktop, tablet, and mobile).",
            "Dynamic Course Management: Implement features for course creation, enrollment, and assessments.",
            "Form Handling: Develop and validate forms for registration, course creation, and submissions.",
            "API Development: Build RESTful APIs to handle users, courses, enrollments, assessement, and grading logic.",
            "Database Management: Design and manage relational databases (MySQL) to store structured educational data.",
            "Authentication & Authorization: Implement secure JWT-based authentication and RBAC for admins, instructors, and students.",
            "File Upload & Management: Enable instructors and students to upload and access learning materials using cloud storage (R2).",
            "Performance Optimization: Optimize database queries, API responses, and frontend performance for scalability.",
            "Code Reviews: Maintain high code quality through reviews and best coding practices.",
            "Deployment & Monitoring: Set up deployment using Docker and Railway for backend and cloud platforms (Vercel) for frontend.",
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
        <p className="about-text justified-text">{projectDetails.background}</p>
        <h4 className="h4 project-details-title">Responsibilities:</h4>
        <ul className="responsibilities-list">
          {projectDetails.responsibilities.map((responsibilities) => (
            <li key={responsibilities}>{responsibilities}</li>
          ))}
        </ul>
      </article>
    </div>
  );
};

export default ProjectDetail;
