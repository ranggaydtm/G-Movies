import { Card, Col, Container, Image, Row } from "react-bootstrap";
import JokerImage from "../assets/images/trending/joker1.jpg";
import GetHard from "../assets/images/trending/gethard.webp";
import GoodFellas from "../assets/images/trending/goodfellas.jpg";
import LastImage from "../assets/images/trending/last.jpg";
import InsideImage from "../assets/images/trending/inside.jpg";
import IntheImage from "../assets/images/trending/inthe.webp";

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white text-center">TRENDING MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="movieImage">
              <Image src={LastImage} alt="Joker Movies" className="Images" />
              <div className="text-white bg-dark p-2 m-1">
                <Card.Title className="text-center">THE LAST OF US</Card.Title>
                <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={InsideImage} alt="Freedom Movies" className="Images" />
              <div className="text-white bg-dark p-2 m-1">
                <Card.Title className="text-center">INSIDE</Card.Title>
                <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={IntheImage} alt="Smile Movies" className="Images" />
              <div className="text-white bg-dark p-2 m-1">
                <Card.Title className="text-center">ON THE INSIDE</Card.Title>
                <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={JokerImage} alt="Smile Movies" className="Images" />
              <div className="text-white bg-dark p-2 m-1">
                <Card.Title className="text-center">JOKER</Card.Title>
                <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={GetHard} alt="Smile Movies" className="Images" />
              <div className="text-white bg-dark p-2 m-1">
                <Card.Title className="text-center">GET HARD</Card.Title>
                <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={GoodFellas} alt="Smile Movies" className="Images" />
              <div className="text-white bg-dark p-2 m-1">
                <Card.Title className="text-center">GOODFELLAS</Card.Title>
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

export default Trending;
