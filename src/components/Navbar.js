"use client";

import { useRouter } from "next/navigation";

const Navbar = ({ activePage }) => {
  const router = useRouter();
  const navigateTo = (page) => {
    router.push(`/${page}`);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <button
            className={`navbar-link ${activePage === "about" ? "active" : ""}`}
            onClick={() => navigateTo("about")}
          >
            About
          </button>
        </li>
        <li>
          <button
            className={`navbar-link ${activePage === "resume" ? "active" : ""}`}
            onClick={() => navigateTo("resume")}
          >
            Resume
          </button>
        </li>
        <li>
          <button
            className={`navbar-link ${
              activePage === "portfolio" ? "active" : ""
            }`}
            onClick={() => navigateTo("portfolio")}
          >
            Portfolio
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
