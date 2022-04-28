import React, { useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useBoredFetch } from "./useBoredFetch";

export const BoredDetails = () => {
  const [activity, setActivity] = useState();
  const [type, setType] = useState();

  useBoredFetch(setActivity, setType);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={"auto"}>
          <Card>
            <Card.Body>
              <Card.Title>Type:</Card.Title>
              <Card.Text>{type}</Card.Text>
              <Card.Title>Activity:</Card.Title>
              <Card.Text>{activity}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
