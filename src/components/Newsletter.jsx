import { Col, Row, Container } from "react-bootstrap";

export const Newsletter = () => {
  return (
      <Container>
        <div className="newsletter-bx">
          <Row >
            <Col >
              <h5><i>“We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins.”</i></h5>
            </Col>
          </Row>
          <br />
          <Row className="justify-content-center">
            <Col>
              <h6 className="d-flex justify-content-center">Ellen Ullman</h6>
            </Col>
          </Row>
          
        </div>
      </Container>
  )
}
