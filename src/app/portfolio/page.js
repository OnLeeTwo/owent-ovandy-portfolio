"use client";

import React, { useState } from "react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Sucomart",
      category: "Fullstack",
      image: "./assets/images/project-1.jpg",
      link: "https://github.com/OnLeeTwo/frontend-gfg-group-g",
    },
    {
      id: 2,
      title: "Pokemon Viewer",
      category: "Frontend",
      image: "./assets/images/project-2.png",
      link: "https://github.com/OnLeeTwo/pokemon-viewer-next.js",
    },
    {
      id: 3,
      title: "Zoo management API",
      category: "Backend",
      image: "./assets/images/project-3.png",
      link: "https://github.com/OnLeeTwo/module-6-OnLeeTwo",
    },
  ];

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div>
      <article className="portfolio active" data-page="portfolio">
        <header>
          <h2 className="h2 article-title">Portfolio</h2>
        </header>

        <section className="projects">
          <ul className="filter-list">
            {["All", "Frontend", "Backend", "Fullstack"].map((filter) => (
              <li key={filter} className="filter-item">
                <button
                  className={activeFilter === filter ? "active" : ""}
                  onClick={() => handleFilterChange(filter)}
                >
                  {filter}
                </button>
              </li>
            ))}
          </ul>

          <div className="filter-select-box">
            <select
              className="filter-select"
              value={activeFilter}
              onChange={(e) => handleFilterChange(e.target.value)}
            >
              {["All", "Frontend", "Backend", "Fullstack"].map((filter) => (
                <option key={filter} value={filter}>
                  {filter}
                </option>
              ))}
            </select>
          </div>

          <ul className="project-list">
            {filteredProjects.map((project) => (
              <li
                key={project.id}
                className="project-item active"
                data-filter-item
                data-category={project.category.toLowerCase().replace(" ", "-")}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                    />
                  </figure>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-category">{project.category}</p>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
};

export default Portfolio;
