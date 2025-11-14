import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import rydeon from "../../Assets/Projects/rydeon.png";
import gyaanpath from "../../Assets/Projects/gyaanpath.png";
import gettingplaced from "../../Assets/Projects/gettingplaced.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my main projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gettingplaced}
              isBlog={false}
              title="Getting Placed"
              description="GettingPlaced is a role-based job portal that connects job seekers and employers through a secure and interactive 
hiring process. It supports job posting, applications, Zoom interview scheduling, and automated email updates. 
My Tech stack includes MERN stack with Zoom API, and Nodemailer. 
Here, the job seeker logs in and searches filtered job of his choice and apply for it. This application is sent to the 
employeer who posted that job. He reviews the application and his resume and if interested, schedules the 
interview. The job seeker is automatically notified about the interview on email. It also includes an AI chatbot for 
any query. 
I implemented JWT-based authentication, Job seeker portion of sending application, view all jobs page and 
integrated Zoom API for video interviews. 
In short, it streamlines the end-to-end recruitment process with secure communication and automation. "
              ghLink="https://github.com/NITianHarsh/gettingPlaced"
              demoLink="https://gettingplaced.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gyaanpath}
              isBlog={false}
              title="Gyaan Path"
              description="GyaanPath is a full-stack Learning Management System built for both instructors and students. 
It supports course creation, live Zoom sessions, exams with anti-cheat measures, and secure Razorpay payments. 
Students can purchase courses, track their learning progress and use tools like a Pomodoro timer for productivity. 
While the instructors can create and manage courses, upload lectures in bulk and see their overall growth analytics, 
no of students in each course, and overall revenue generated. 
Tech stack: React.js (Tailwind + Shadcn UI) for frontend, Node.js, Express, MongoDB, JWT, and Razorpay for 
backend services. 
In short, it’s an integrated e-learning platform ensuring security, engagement, and real-time interaction between 
students and instructors. "
              ghLink="https://github.com/NITianHarsh/MernStackLMS.git"
              demoLink="https://gyaanpath.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rydeon}
              isBlog={false}
              title="Ryde On"
              description="My project Ryde On is a full-stack ride-hailing application similar to Uber or Ola. It enables users to register, log in, 
and book rides securely, while captains can accept rides in real time. 
The tech stack includes React.js, Node.js, Express, MongoDB, JWT, Socket.IO, and Google Maps API. 
Key features include secure authentication, Google Maps API integration for live pickup and destination 
suggestions and live location, dynamic fare calculation based on distance and vehicle mode, and real-time ride 
updates using Socket.IO."
              ghLink="https://github.com/NITianHarsh/uber-clone"
              demoLink="https://uber-clone-d4g2.onrender.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
