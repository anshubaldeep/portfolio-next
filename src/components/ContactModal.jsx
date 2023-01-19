import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

function ContactModal({
  showModal, setShowModal,
}) {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [queryType, setQueryType] = useState(null);
  const [message, setMessage] = useState(null);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleValidation = () => {
    const tempErrors = {};
    let isValid = true;

    if (name.length <= 0) {
      tempErrors.name = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors.email = true;
      isValid = false;
    }
    if (queryType.length <= 0) {
      tempErrors.queryType = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors.message = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValidForm = handleValidation();

    const res = await fetch('/api/sendgrid', {
      body: JSON.stringify({
        email,
        fullname: name,
        subject: queryType,
        message,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }
    router.push('/thank-you');
  };

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)} className="custom-map-modal contact-modal" variant="dark" centered>
      <Modal.Header closeButton>
        <Modal.Title>
          Contact Me
          <FontAwesomeIcon icon={faPaperPlane} size="1x" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="justify-content-center">
        <Form onSubmit={handleSubmit}>
          <Row>
            <Form.Group as={Col} md="6" sm="12" controlId="validationCustom01" className="form-group">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="name"
                placeholder="Your name"
                onChange={(event) => setName(event.target.value)}
                value={name}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" sm="12" controlId="validationCustom01" className="form-group">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                placeholder="Your email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} sm="12" controlId="formGridState" className="form-group">
              <Form.Label>Type of Project</Form.Label>
              <div className="custom-select">
                <Form.Control
                  as="select"
                  placeholder="Choose..."
                  type="text"
                  name="$QueryType"
                  onChange={(event) => setQueryType(event.target.value)}
                  value={queryType}
                >
                  <option />
                  <option>Front-End</option>
                  <option>Back-End</option>
                  <option>Mobile App</option>
                  <option>Responsive Design</option>
                  <option>Prototyping</option>
                </Form.Control>
              </div>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} sm="12" controlId="formGridState" className="form-group">
              <Form.Label>Additional Details</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows={3}
                placeholder="Your message"
                onChange={(event) => setMessage(event.target.value)}
                value={message}
              />
            </Form.Group>
          </Row>
          <Row className="text-center">
            <Button type="submit" value="Submit" size="lg" block className="submit-btn">Submit form</Button>
          </Row>
          <Form.Control type="text" name="honeypot" style={{ display: 'none' }} />
          <Form.Control type="hidden" name="accessKey" value="af947b53-2b26-41c9-9cb1-fc5d9004ef41" />
          <Form.Control type="hidden" name="subject" value={`${queryType} Query from portfolio by ${name} - ${email}`} />
          <Form.Control type="hidden" name="redirectTo" value="https://baldeep-singh.netlify.app/success" />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModal(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ContactModal;
