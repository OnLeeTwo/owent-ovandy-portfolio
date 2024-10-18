const About = () => {
  return (
    <div>
      <article className="about  active" data-page="about">
        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>

        <section className="about-text">
          <p>
            Detail-oriented software engineer with a commitment to producing
            quality end products and a keen eye for sustainable practices.
          </p>

          <p>
            My experience as a Structural Engineer, where I was entrusted to
            design a factory foundation for a renowned company that improved
            efficiency and sustainability, provided me with a unique skill set
            that is crucial in software engineering. Having completed the RevoU
            bootcamp, my technical skills include JavaScript, Python,
            TypeScript, React, Next.js, Flask, and MySQL, complemented by strong
            problem-solving, analytical capabilities, and excellent
            communication skills. By leveraging my engineering background and
            dedication to technology, I am excited to contribute impactful
            software solutions in a dynamic engineering role.
          </p>
        </section>

        <section className="service">
          <h3 className="h3 service-title">What I am good at</h3>

          <ul className="service-list">
            <li className="service-item">
              <div className="service-icon-box">
                <img
                  src="./assets/images/icon-design.svg/
        "
                  alt="design icon"
                  width="40"
                />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Front-end design</h4>

                <p className="service-item-text">
                  Able to create dynamic and interactive user interfaces using
                  modern frameworks and technologies, like React and Next.js
                </p>
              </div>
            </li>

            <li className="service-item">
              <div className="service-icon-box">
                <img
                  src="./assets/images/icon-dev.svg"
                  alt="Web development icon"
                  width="40"
                />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Back-end development</h4>

                <p className="service-item-text">
                  Building and managing server-side logic, databases, and APIs
                  for seamless functionality, using Python, Flask, and MySQL
                </p>
              </div>
            </li>

            <li className="service-item">
              <div className="service-icon-box">
                <img
                  src="./assets/images/icon-app.svg"
                  alt="mobile app icon"
                  width="40"
                />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Responsive design</h4>

                <p className="service-item-text">
                  Ensuring web applications adapt smoothly across various
                  devices and screen sizes.
                </p>
              </div>
            </li>

            <li className="service-item">
              <div className="service-icon-box">
                <img
                  src="./assets/images/icon-quote.svg"
                  alt="camera icon"
                  width="40"
                />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Detail-oriented</h4>

                <p className="service-item-text">
                  Focusing on precision and thoroughness in every aspect of
                  development for high-quality results.
                </p>
              </div>
            </li>
          </ul>
        </section>

        {/* <section className="testimonials">
          <h3 className="h3 testimonials-title">Testimonials</h3>

          <ul className="testimonials-list has-scrollbar">
            <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img
                    src="./assets/images/avatar-1.png"
                    alt="Daniel lewis"
                    width="60"
                    data-testimonials-avatar
                  />
                </figure>

                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  Daniel lewis
                </h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>
                    Richard was hired to create a corporate identity. We were
                    very pleased with the work done. She has a lot of experience
                    and is very concerned about the needs of client. Lorem ipsum
                    dolor sit amet, ullamcous cididt consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels
                    dolore magnarels alia.
                  </p>
                </div>
              </div>
            </li>

            <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img
                    src="./assets/images/avatar-2.png"
                    alt="Jessica miller"
                    width="60"
                    data-testimonials-avatar
                  />
                </figure>

                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  Jessica miller
                </h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>
                    Richard was hired to create a corporate identity. We were
                    very pleased with the work done. She has a lot of experience
                    and is very concerned about the needs of client. Lorem ipsum
                    dolor sit amet, ullamcous cididt consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels
                    dolore magnarels alia.
                  </p>
                </div>
              </div>
            </li>

            <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img
                    src="./assets/images/avatar-3.png"
                    alt="Emily evans"
                    width="60"
                    data-testimonials-avatar
                  />
                </figure>

                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  Emily evans
                </h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>
                    Richard was hired to create a corporate identity. We were
                    very pleased with the work done. She has a lot of experience
                    and is very concerned about the needs of client. Lorem ipsum
                    dolor sit amet, ullamcous cididt consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels
                    dolore magnarels alia.
                  </p>
                </div>
              </div>
            </li>

            <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img
                    src="./assets/images/avatar-4.png"
                    alt="Henry william"
                    width="60"
                    data-testimonials-avatar
                  />
                </figure>

                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  Henry william
                </h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>
                    Richard was hired to create a corporate identity. We were
                    very pleased with the work done. She has a lot of experience
                    and is very concerned about the needs of client. Lorem ipsum
                    dolor sit amet, ullamcous cididt consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels
                    dolore magnarels alia.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <div className="modal-container" data-modal-container>
          <div className="overlay" data-overlay></div>

          <section className="testimonials-modal">
            <button className="modal-close-btn" data-modal-close-btn>
              <ion-icon name="close-outline"></ion-icon>
            </button>

            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img
                  src="./assets/images/avatar-1.png"
                  alt="Daniel lewis"
                  width="80"
                  data-modal-img
                />
              </figure>

              <img src="./assets/images/icon-quote.svg" alt="quote icon" />
            </div>

            <div className="modal-content">
              <h4 className="h3 modal-title" data-modal-title>
                Daniel lewis
              </h4>

              <time dateTime="2021-06-14">14 June, 2021</time>

              <div data-modal-text>
                <p>
                  Richard was hired to create a corporate identity. We were very
                  pleased with the work done. She has a lot of experience and is
                  very concerned about the needs of client. Lorem ipsum dolor
                  sit amet, ullamcous cididt consectetur adipiscing elit, seds
                  do et eiusmod tempor incididunt ut laborels dolore magnarels
                  alia.
                </p>
              </div>
            </div>
          </section>
        </div> */}

        <section className="clients">
          <h3 className="h3 clients-title">Projects</h3>

          <ul className="clients-list has-scrollbar">
            <li className="clients-item">
              <a href="portfolio/sucomart">
                <img
                  src="./assets/images/logo-1-color.png"
                  alt="sucomart logo"
                />
              </a>
            </li>

            <li className="clients-item">
              <a href="portfolio/pokemon-viewer">
                <img
                  src="./assets/images/logo-2-color.png"
                  alt="pokemon-viewer logo"
                />
              </a>
            </li>

            <li className="clients-item">
              <a href="portfolio/zoo-management-api">
                <img
                  src="./assets/images/logo-3-color.png"
                  alt="zoo-management-api logo"
                />
              </a>
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
};

export default About;
