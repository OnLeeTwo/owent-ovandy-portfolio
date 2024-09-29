const Resume = () => {
  return (
    <div>
      <article className="resume active" data-page="resume">
        <header>
          <h2 className="h2 article-title">Resume</h2>
        </header>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>

            <h3 className="h3">Education</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                RevoU Full Stack Software Engineering
              </h4>

              <span>February, 2024 - August, 2024 </span>

              <p className="timeline-text">
                Learn about Frontend and Backend web development with an
                understanding about best practices in software development
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Krida Wacana Christian University (UKRIDA)
              </h4>

              <span>August, 2017 – November, 2021</span>

              <p className="timeline-text">
                GPA : 3,71 <br />
                Civil Engineering
              </p>
            </li>
          </ol>
        </section>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>

            <h3 className="h3">Working Experiences</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Freelance, Appen</h4>

              <span>March, 2022 – Now</span>

              <p className="timeline-text">
                <ul>
                  <li style={{ listStyleType: "disc" }}>
                    Participated in crowdsourcing projects as a reviewer for ad
                    recommendations presented to users, contributing to
                    algorithm enhancement for a large platform, which improved
                    user engagement.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Employed SRT Rater to evaluate advertisement performance,
                    ensuring the accuracy and effectiveness of recommendations
                    provided to users; analysed performance data to inform
                    necessary adjustments.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Contributed to the timely completion of projects while
                    operating as part of a larger team of approximately 1,000
                    participants, helping to deliver projects ahead of schedule.
                  </li>
                </ul>
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Structural Engineer, PT. Ketira Engineering Consultants
              </h4>

              <span>February, 2021 – February, 2022</span>

              <p className="timeline-text">
                <ul>
                  <li style={{ listStyleType: "disc" }}>
                    Leveraged ETABS and SAP2000 software to accurately replicate
                    design specifications from architects and clients, enabling
                    the successful execution of 4 diverse projects, resulting in
                    an estimated 15% reduction in costs.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Performed comprehensive load analyses utilizing ETABS and
                    SAP2000, factoring in seismic, wind, and soil loads, which
                    enhanced structural integrity and optimized material
                    efficiency, contributing to a more cost-saving build.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Collaborated with the quantity surveyor to strategically
                    select cost-effective and durable materials, ensuring that
                    each project met safety standards and contributed
                    significantly to an overall project budget of over Rp7B.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Actively represented the consultancy in tender meetings,
                    delivering clear and insightful explanations regarding
                    structural methodologies, leading to the successful
                    proceeding of major contracts valued at Rp46B.
                  </li>
                </ul>
              </p>
            </li>
          </ol>
        </section>

        <section className="skill">
          <h3 className="h3 skills-title">My skills</h3>

          <ul className="skills-list content-card">
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Programing Languages</h5>
                <br />
                <data value="80">JavaScript, TypeScript, Python</data>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Frameworks</h5>
                <br />
                <data value="70">React, Next.JS, Flask</data>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Databases</h5>
                <br />
                <data value="90">MySQL, Postgres, MongoDB</data>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Others</h5>
                <br />
                <data value="50">Git, Docker, Postman, Swagger</data>
              </div>
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
};

export default Resume;
