import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import frontendImage from '../Assets/section2-dark.webp';
import backendImage from '../Assets/section3-dark.webp';
import designImage from '../Assets/section1-dark.webp';

const sections = [

  {
    name: 'Design and Prototyping',
    description: 'Improve & add more value to products through simple and interactive design',
    line: 'Things I enjoy designing',
    objects: 'UX, UI, Web, Mobile, Apps',
    tools: ['Adobe XD', 'Figma', 'Pen & Paper', 'Adobe PhotoShop'],
    image: designImage,
    pos: 'start',
  },

  {
    name: 'Front-End',
    description: 'Code and develop solutions from scratch which are simple and effective',
    line: 'Things I develop',
    objects: 'Websites, Web Apps, Mobile apps',
    tools: ['React', 'Next.js', 'React Native', 'JavaScript','HTML', 'CSS'],
    image: frontendImage,
    pos: 'middle',
  },

  {
    name: 'Back-End',
    description: 'Bringing to life the logic brhind applications with the use of mangeable and potent technologies',
    line: 'Ask me to program',
    objects: 'Applications and Webservices',
    tools: ['NodeJS', 'MySQL', 'Python', 'Django', 'Blockchain'],
    image: backendImage,
    pos: 'last',
  },

];

function AboutSection() {
  const sectionData = sections.map((sec, index) => (
    <Col md={4} xs={12} className="text-center section-card" key={index}>
      <Card className={`w-100 ${sec.pos}`}>
        <Card.Body>
          <Image src={sec.image} alt="section-img" className={`section-img image-${index + 1}`} />
          <Card.Title>
            {sec.name}
            {index > 0 ? ' Developer' : ''}
          </Card.Title>
          <Card.Subtitle className="mb-2">{sec.description}</Card.Subtitle>
          <Card.Text as="div">
            <div className="objects-section">
              <p className="section-line mt-1">
                {sec.line}
                :
              </p>
              <p>{sec.objects}</p>
            </div>
            <div className="tools-section">
              <p className="section-line mt-1">
                {sec.name}
                {' '}
                tools:
              </p>
              <ul className="list-unstyled">
                {sec.tools.map((tool, idx) => (<li key={idx}>{tool}</li>))}
              </ul>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ));
  return (
    <Container className="About" id="about">
      <Row className="text-left about-text">

        <Col>
          <p className="section-start mt-5">About Me/&gt;</p>
          <br />
          <h1>Hello! Nice to meet you.</h1>
          <p>
            I am an avid software developer with passion for solving problems. I help clients to translate complex problem statements into easy-to-understand solutions. I believe in modern aesthetics and minimalist design principles.
            <span className="d-none d-sm-none d-md-block">
              <br />
              {' '}
              I am naturally inquisitive and strive to keep myself updated with the latest trends in technologies. When I am not developing apps, you’ll find me shredding my guitar or out in the field playing football.
            </span>
          </p>
        </Col>
      </Row>
      <Row>
        {sectionData}
      </Row>
    </Container>
  );
}

export default AboutSection;
