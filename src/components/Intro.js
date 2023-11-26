import { Container, Row, Col, Button } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">WELCOME TO</div>
            <div className="title">WATCH MOJO</div>
            <div className="introButton mt-4 text-center">
              <Button variant="dark" href="#movies">
                Lihat Film
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
