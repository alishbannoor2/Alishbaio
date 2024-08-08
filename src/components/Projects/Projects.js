import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import AIchatbot from "../../Assets/Projects/AIchatbot.png";
import PantryPal from "../../Assets/Projects/PantryPal.png";
import suicide from "../../Assets/Projects/suicide.png";
import PortfolioWebsite from "../../Assets/Projects/PortfolioWebsite.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PantryPal}
              isBlog={false}
              title="PantryPal"
              description="A Next.js based web application for tracking your inventory with user friendly interface mainly by using Material UI and backend being handled by firestore Database provided my firebase. For user authentication, firebase Auth is used. The application is deployed through Vercel."
              ghLink="https://github.com/alishbannoor2/Pantry-Pal"
              demoLink="https://youtu.be/opLKAlSFOs8?si=AZTm_h4kjLZKUI-o"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PortfolioWebsite}
              isBlog={false}
              title="Portfolio Website"
              description="A portfolio website designed with HTML, CSS and JS. This portfolio serves as a place to showcase my skills, projects and experience."
              ghLink="https://github.com/alishbannoor2/PortfolioWebsite"
              demoLink="https://youtu.be/bxXG80Eck5Y?si=ni66KbJO0plyE1v7"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AIchatbot}
              isBlog={false}
              title="AI chatbot"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/alishbannoor2/AI_chatbot"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
