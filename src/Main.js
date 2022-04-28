import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import CustomCard from "./CustomCard";

const Main = () => {
  return (
    <Container style={{ marginTop: "3rem" }}>
      <Row>
        <Col>
          <CustomCard
            name="Cat"
            details="Fun facts about cats"
            uri="/catfact"
          />
        </Col>
        <Col>
          <CustomCard
            name="Bored"
            details="Bored is a free API to find something to do by getting suggestions for random activities"
            uri="/bored"
          />
        </Col>
        <Col>
          <CustomCard
            name="IP Address"
            details="Check your current IP address"
            uri="/ipcheck"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
