import React from "react";
import { Card } from "react-bootstrap";

const ServiceCard = ({ data }) => {
  return (
    <Card className="serviceCard">
      <div className="serviceCardImg">
        <Card.Img variant="top" src="/assets/images/whiteBg.png" height={400} />
      </div>
      <Card.Body>
        <h4
          // onClick={() => {
          //   navigate(`/services/${data.link}`);
          // }}
          className="default"
        >
          {data.title}
        </h4>
        <Card.Text className="serviceCardDesc default">
          {data.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;
