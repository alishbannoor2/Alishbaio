import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCard from "./CertificatesCards";
import Particle from "../Particle";
import c1 from "../../Assets/Certificates/13- Alishba Noor participation in Nasa Hackathon.png";
import c2 from "../../Assets/Certificates/6- Alishba Noor IEEE membership.png";
import c3 from "../../Assets/Certificates/14- Alishba Noor Open Source Contribution.png";
import c4 from "../../Assets/Certificates/12- Alishba Noor Intro to Java.png";
import c5 from "../../Assets/Certificates/16- Alishba Noor SWE Principles in Python.png";
import c6 from "../../Assets/Certificates/9- Alishba Noor Intro to OOP in Java.png";
import c7 from "../../Assets/Certificates/2- Alishba Noor Coderush II.png";
import c8 from "../../Assets/Certificates/3- Alishba Noor Coderush I.png";
import c9 from "../../Assets/Certificates/8- ALishba Noor Intro to data analysis using MS Excel.png";
import c10 from "../../Assets/Certificates/10- Alishba Noor Intro to MS Excel.png";
import c11 from "../../Assets/Certificates/15- Alishba Noor HacktoberFest.png";
import c12 from "../../Assets/Certificates/7- Alishba Noor IEEE WIE.png";
import c13 from "../../Assets/Certificates/5- Alishba Noor IEEE CS.png";
import c14 from "../../Assets/Certificates/4- Alishba Noor IEEE communications Society.png";



function Certificates() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Accomplishments </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some certificates I recieved recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
         
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={c1}
              isBlog={false}
              title="NASA Space Apps Challenge Hackathon'24"
              />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={c2}
              isBlog={false}
              title="Official IEEE Student Membership"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={c3}
              isBlog={false}
              title="Open Source Contribution"
               />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={c4}
              isBlog={false}
              title="Introduction to Java"
               />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={c5}
              isBlog={false}
              title="Software Engineering Principles in Python"
               />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={c6}
              isBlog={false}
              title="Introduction to OOP in Java"
               />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={c7}
              isBlog={false}
              title="CodeRush II Participation"
              />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={c8}
              isBlog={false}
              title="3rd Position in CodeRush I"
             />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={c9}
              isBlog={false}
              title="Intro to Data Analysis using MS Excel"
              />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={c10}
              isBlog={false}
              title="Intro to MS Excel"
             />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={c11}
              isBlog={false}
              title="Contribution in HacktoberFest'24"
              />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={c12}
              isBlog={false}
              title="IEEE Women in Engineering"
               />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={c13}
              isBlog={false}
              title="IEEE Computer Society"
               />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={c14}
              isBlog={false}
              title="IEEE Communications Society"
               />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;
