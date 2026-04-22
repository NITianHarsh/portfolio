import React from "react";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/avatar.svg";
import { Container, Row, Col } from "react-bootstrap";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a final-year Mechanical Engineering student who developed a
              strong passion for software development and data-driven problem
              solving. Currently working as an{" "}
              <b className="purple">SDE Intern at Ada</b>, I focus on building
              scalable, production-ready applications that deliver real-world
              impact.
              <br />
              <br />I have hands-on experience across
              <i>
                <b className="purple">
                  {" "}
                  MERN Stack, PostgreSQL, Python and Data Structures &
                  Algorithms{" "}
                </b>
              </i>
              — with a strong interest in backend engineering and system design.
              <br />
              <br />
              During my internship, I’ve contributed to a
              <i>
                <b className="purple">
                  {" "}
                  multi-tenant SaaS communication platform{" "}
                </b>
              </i>
              by implementing features like role-based access control, automated
              testing, and a cron-based report scheduling system with
              multi-channel delivery via Email, SFTP, and cloud storage (S3).
              <br />
              <br />
              I also enjoy working with data — analyzing large datasets and
              transforming them into meaningful insights to support business
              decisions.
              <br />
              <br />
              I’m particularly interested in building
              <b className="purple"> scalable backend systems </b>
              and creating efficient, user-focused applications that solve
              real-world problems.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
