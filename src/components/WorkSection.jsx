import React, { Suspense, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Tilt from 'react-tilt';
import projects from '../Data/ProjectData';
const ProjectModal = React.lazy(() => import('./ProjectModal'));

function WorkSection() {
  const [project, setProject] = useState({});

  const projectImages = projects.map((proj, index) => (

    <Col md={6} sm={12} className="d-flex justify-content-center mt-md-5 mt-2" key={index}>
      <Tilt className="Tilt" options={{ max: 25, scale: 1.1 }} style={{ height: 441, width: 450 }}>
        <Card className="bg-transparent text-center ml-md-0 ml-5" onClick={() => setProject(proj)}>
          <Card.Img src={proj.path} alt={proj.alt} loading="lazy" className="img-fluid" />
          <Card.ImgOverlay className="text-left">
            <Card.Title
              className="tilt-inner font-weight-bold text-left"
              style={{
                    position: 'absolute', bottom: 40, left: -45, width: '260px',
                }}
            >
              {proj.name}
              <hr />
              <p className="mt-4" style={{ fontSize: '0.5em' }}>
                → 0
{proj.id}
              </p>
            </Card.Title>
          </Card.ImgOverlay>
        </Card>
      </Tilt>
    </Col>
  ));

  return (
    <>
      <Container className="work mt-5" id="work">
        <Row>
          <Col className="position-relative">
            <p className="section-start">Work/&gt;</p>
            <span>Some selected projects.....</span>
            <br />
            <div id="web" className="mb-3 d-none d-sm-none d-md-block img-responsive" />
            <Row className="justify-content-center">
              {projectImages}
            </Row>
          </Col>
        </Row>
        <br />
      </Container>
      <Suspense fallback={<div>Loading...</div>}>
        {
                    Object.keys(project).length > 0 && (
                    <ProjectModal
                      show={Object.keys(project).length > 0}
                      index={project.id}
                      handleClose={() => setProject({})}
                      proj={project}
                    />
                    )
                }
      </Suspense>
    </>
  );
}

export default WorkSection;
