import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder</h4>
                <h5>Orion</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently building Orion, a digital solutions agency focused on creating modern websites, SaaS platforms, AI tools, and automation systems for startups and businesses.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer & Designer</h4>
                <h5>Fixdot Technologies</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Jan 2026 – Jun 2026. Worked as a Full Stack Developer and Designer, developing web applications, handling both frontend and backend systems, and designing user-focused interfaces.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>E-Book Publisher & Designer</h4>
                <h5>IbookServices, Faridabad</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Jul 2025 – Dec 2025. Worked on e-book publishing and digital design, preparing books for digital platforms and designing layouts and visual assets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
