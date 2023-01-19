import React from 'react';
import Container from 'react-bootstrap/Container';
import MyJourneyCode from './MyJourneCode';

function MyJourney() {
  return (
    <Container fluid className="MyJourney">
      <Container className="line-numbers " id="myjourney">
        <p className="section-start mt-5">MyJourney/&gt;</p>
        <MyJourneyCode />
      </Container>
    </Container>
  );
}

export default MyJourney;
