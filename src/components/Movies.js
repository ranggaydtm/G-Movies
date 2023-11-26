import { Card, Col, Container, Image, Row } from "react-bootstrap";
import EscapeImage from "../assets/images/movies/espace.jpg";
import Custody from "../assets/images/movies/custody.jpg";
import FreedomImage from "../assets/images/movies/freedom.jpg";
import SmileImage from "../assets/images/movies/smile.png";
import TheboxImage from "../assets/images/movies/thebox.webp";
import VenomImage from "../assets/images/movies/venom.avif";

const Movies = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white text-center">MAYBE YOU LIKE</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="movies">
            <Card className="movieImage">
              <Image src={VenomImage} alt="Joker Movies" className="Images" />
              <div className="text-white bg-dark p-2 m-1">
                <Card.Title className="text-center">VENOM</Card.Title>
                <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={TheboxImage} alt="Freedom Movies" className="Images" />
              <div className="text-white bg-dark p-2 m-1">
                <Card.Title className="text-center">THE BOX</Card.Title>
                <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={SmileImage} alt="Smile Movies" className="Images" />
              <div className="text-white bg-dark p-2 m-1">
                <Card.Title className="text-center">SMILE</Card.Title>
                <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={EscapeImage} alt="Smile Movies" className="Images" />
              <div className="text-white bg-dark p-2 m-1">
                <Card.Title className="text-center">ESCAPE ROOM</Card.Title>
                <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={FreedomImage} alt="Smile Movies" className="Images" />
              <div className="text-white bg-dark p-2 m-1">
                <Card.Title className="text-center">FREEDOM</Card.Title>
                <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={Custody} alt="Smile Movies" className="Images" />
              <div className="text-white bg-dark p-2 m-1">
                <Card.Title className="text-center">CUSTODY</Card.Title>
                <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Movies;
