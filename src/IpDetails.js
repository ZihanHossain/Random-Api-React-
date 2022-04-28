import React, { useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { MapComponent } from "./MapComponent";
import { useBoredFetch } from "./useBoredFetch";
import { useIpCheckFetch } from "./useIpCheckFetch";
import { useIpDetailsFetch } from "./useIpDetailsFetch";

export const IpDetails = () => {
  const [ip, setIp] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [zip, setZip] = useState();
  const [timezone, setTimezone] = useState();
  const [count, setCount] = useState(0);

  useIpCheckFetch(setIp);
  useIpDetailsFetch(setCity, setCountry, setZip, setTimezone);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={"auto"}>
          <Card>
            <Card.Header>Your IP Information:</Card.Header>
            <Card.Body>
              <Card.Title>Ip:</Card.Title>
              <Card.Text>{ip}</Card.Text>
              <Card.Title>City:</Card.Title>
              <Card.Text>{city}</Card.Text>
              <Card.Title>Country:</Card.Title>
              <Card.Text>{country}</Card.Text>
              <Card.Title>Zip:</Card.Title>
              <Card.Text>{zip}</Card.Text>
              <Card.Title>Timezone:</Card.Title>
              <Card.Text>{timezone}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <MapComponent />
      </Row>
    </Container>
  );
};
