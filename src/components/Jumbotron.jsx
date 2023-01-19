import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactRotatingText from 'react-rotating-text';
import Image from 'next/image';
import Avatar from '../Assets/Avatar.webp';

function JumbotronComponent() {
  const develop = ['websites', 'webapps', 'mobile-apps', 'ux/ui'];

  return (
    <div className="jumbotron w-100 section align-items-center" id="home">
      <Container>
        <Row>
          <Col lg={8} md={6} xs={12} className="">
            <p className="section-start">Start/&gt;</p>
            <h1>
              Hi, my name is &nbsp;
              <span className="name font-weight-bold">Baldeep Singh</span>
            </h1>
            <h1>
              I&nbsp;
              <span className="font-italic">design</span>
              {' '}
              and&nbsp;
              <span className="text-monospace">develop</span>
              <br />
              {' '}
              <ReactRotatingText className="rotating-text" items={develop} />
            </h1>
            <span className="mt-md-3">Let me show you....</span>
            <a href="#contact" className="text-decoration-none" aria-label="Contact Me">
              <button className="btn-custom custom-btn d-none d-md-block d-sm-none">Contact Me   ➔</button>
            </a>
          </Col>
          <Col lg={4} md={6} xs={12}>
            <div className="text-center">
              <Image src={Avatar} alt="My_Avatar" className="img img-responsive" priority />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default JumbotronComponent;
