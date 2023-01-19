import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithubAlt, faTwitter, faLinkedin, faFacebook, faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Logo from '../../Assets/logo.webp';

const footerLink = [
  {
    name: 'Gmail',
    link: 'mailto:anshubaldeep@gmail.com',
    icon: faEnvelope,
  },

  {
    name: 'Twitter',
    link: 'https://twitter.com/anshubaldeep24',
    icon: faTwitter,
  },

  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/baldeep-singh-b2a234ab/',
    icon: faLinkedin,
  },

  {
    name: 'Github',
    link: 'https://github.com/anshubaldeep',
    icon: faGithubAlt,
  },

  {
    name: 'Facebook',
    link: 'https://www.facebook.com/baldeep.singh.583',
    icon: faFacebook,
  },

  {
    name: 'Instagram',
    link: 'https://www.instagram.com/baldeep.singh.24/',
    icon: faInstagram,
  },

];

function Footer() {
  const footerLinks = footerLink.map((li, index) => (
    <OverlayTrigger
      key={index}
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={<Tooltip id={index}>{li.name}</Tooltip>}
    >
      <Col md={1} xs={3} sm={3} key={index} className="links mt-3">

        <a href={li.link} target="_blank" rel="noopener noreferrer" aria-label="social media links">
          <div className="circle-icon"><FontAwesomeIcon icon={li.icon} /></div>
        </a>
      </Col>
    </OverlayTrigger>
  ));
  return (
    <Container className="Footer">

      <p className="section-start mt-4">Contact/&gt;</p>

      <div className="text-center" style={{ fontSize: '0.75em' }}>
        <Image src={Logo} alt="logo" style={{ height: '200px', width: '200px' }} />
        <p> Constantly Learning!</p>
        <p>Always Progressing...</p>
      </div>
      <div className="justify-content-center">
        <Row className="text-sm-left text-md-center footer-row justify-content-center mt-3 d-flex">
          {footerLinks}
        </Row>
      </div>
      <div className="text-center copyright mb-3">
        <p>Copyright © 2023 Baldeep Singh || Made with NextJS</p>
      </div>

    </Container>
  );
}

export default Footer;
