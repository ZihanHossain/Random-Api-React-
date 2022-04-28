import React, { useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useCatfactFetch } from "./useCatFactFetch";

export const CatDetails = () => {
  const [fact, setFact] = useState();

  useCatfactFetch(setFact);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={"auto"}>
          <Card>
            <Card.Header>Fact:</Card.Header>
            <Card.Body>
              <Card.Text>{fact}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
