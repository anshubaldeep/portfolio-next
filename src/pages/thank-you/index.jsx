import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import Image from 'next/image';
import SuccessImg from '../../Assets/success.webp';

function SuccessPage() {
  const router = useRouter();
  const redirectToMainPage = () => {
    router.push('/');
  };
  return (
    <div className="Success">
      <Container className="text-center">
        <Row>
          <Col md={6} sm={12}>
            <p>Thank You for your interest!</p>
            <p>I have recieved your query.</p>
            <p>I'll follow up with you soon!</p>
            <Button className="btn-primary mb-4 text-sm" onClick={redirectToMainPage}>
              Back to main page
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </Button>
          </Col>
          <Col md={6} sm={12}>
            <Image
              src={SuccessImg}
              alt="Success"
              priority
              className="success-img"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SuccessPage;
