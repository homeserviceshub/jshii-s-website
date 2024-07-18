import React from "react";
import "./pageHeader.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const PageHeader = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const getBreadcrumbs = () => {
    const breadcrumbs = [];
    breadcrumbs.push(
      <Link key="home" to="/">
        Home
      </Link>
    );

    pathParts.forEach((part, index) => {
      const path = `/${pathParts.slice(0, index + 1).join("/")}`;
      const capitalizedPart = capitalizeFirstLetter(part.replace(/-/g, " "));
      if (index === pathParts.length - 1) {
        breadcrumbs.push(` / ${capitalizedPart}`);
      } else {
        breadcrumbs.push(
          ` / `,
          <Link key={path} to={path}>
            {capitalizedPart}
          </Link>
        );
      }
    });

    return breadcrumbs;
  };

  return (
    <div className="pageHeader">
      <div className="bg"></div>
      <Container>
        <Row>
          <Col lg={12} className="text-center headerText">
            {getBreadcrumbs()}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PageHeader;
