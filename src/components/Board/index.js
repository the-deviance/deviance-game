import React from "react";
import Card from "../Card";
import { Container, Col, Row } from "reactstrap";
import CenterCard from "./center";

export default function Board() {
  return (
    <Container
      style={{
        width: "900px",
      }}
    >
      <Row xs="6">
        <Col>
          <Card id={0} />
        </Col>
        <Col>
          <Card id={1} />
        </Col>
        <Col>
          <Card id={2} />
        </Col>
        <Col>
          <Card id={3} />
        </Col>
        <Col>
          <Card id={4} />
        </Col>
        <Col>
          <Card id={5} />
        </Col>
      </Row>

      <Row xs="6">
        <Col>
          <Row>
            <Col>
              <Card id={15} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Card id={14} />
            </Col>
          </Row>
        </Col>
        <Col xs="8">
          <CenterCard />
        </Col>
        <Col>
          <Row>
            <Col>
              <Card id={6} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Card id={7} />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row xs="6">
        <Col>
          <Card id={13} />
        </Col>
        <Col>
          <Card id={12} />
        </Col>
        <Col>
          <Card id={11} />
        </Col>
        <Col>
          <Card id={10} />
        </Col>
        <Col>
          <Card id={9} />
        </Col>
        <Col>
          <Card id={8} />
        </Col>
      </Row>
    </Container>
  );
}
