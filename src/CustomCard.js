// import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CustomCard = ({ name, details, uri }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={uri}>
            <Button variant="primary">View</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CustomCard;
