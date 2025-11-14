import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Harshit Kumar Verma</span>{" "}
            from <span className="purple">Uttar Pradesh, India</span>.
            <br />
            I’m currently pursuing my{" "}
            <span className="purple">B.Tech in Mechanical Engineering</span> at{" "}
            <span className="purple">MNNIT Allahabad</span>.
            <br />
            I’m deeply passionate about{" "}
            <span className="purple">Data Structures & Algorithms, Web Development, and System Design</span>.
            <br />
            <br />
            I actively participate in extracurriculars — I’ve been a{" "}
            <span className="purple">Coordinator in the Cultural Dance Committee (Bhangra)</span>,
            volunteered in{" "}
            <span className="purple">Saraswati Pooja</span>, and contributed as a{" "}
            <span className="purple">member of the Green Club</span>.
            <br />
            <br />
            Some of my notable achievements include solving{" "}
            <span className="purple">600+ problems on LeetCode (1680 rating)</span>,
            placing in the <span className="purple">Top 5 at Hack36 2024</span>, and
            becoming <span className="purple">Second Runner-up at CodeSangam, Avishkar</span>.
            <br />
            <br />
            Outside academics and engineering, here’s what keeps me energized:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Technology & Building Side Projects 🚀
            </li>
            <li className="about-activity">
              <ImPointRight /> Fitness & Traveling to Refresh My Mind 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep building — your work will define your journey."
          </p>
          <footer className="blockquote-footer">Harshit Verma</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
