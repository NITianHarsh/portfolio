import React from "react";
import Particle from "../Particle";
import { Col, Container, Row } from "react-bootstrap";

const Internships = () => {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Experience</strong>
        </h1>
        <p style={{ color: "white", textAlign: "center" }}>
          Here’s what I’ve worked on professionally.
        </p>

        <Row className="justify-content-center">
          <Col md={8} className="experience-card">
            <div className="exp-card-view">
              <div className="exp-header">
                <div>
                  <h3>ADA — SDE Intern</h3>
                  <p className="exp-duration">Feb 2026 – Present</p>
                </div>
              </div>

              <ul className="exp-points">
                <li>
                  Worked on a multi-tenant SaaS communication platform (BMP)
                  with role-based access control.
                </li>
                <li>
                  Automated testing for modules like Customer 360, Dashboard,
                  and WhatsApp integrations.
                </li>
                <li>
                  Built a cron-based report scheduling system for efficient
                  execution.
                </li>
                <li>
                  Implemented multi-channel report delivery via Email, SFTP, and
                  AWS S3.
                </li>
                <li>
                  Collaborated with teams to build scalable and production-ready
                  backend systems.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Internships;
