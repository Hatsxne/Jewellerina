import React, { useState } from "react";
import "./Information.css";
import { useNavigate } from "react-router-dom";
import { Form, Container, Col, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Information() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const handleConfirmPurchase = () => {
    if (fullName && cardNumber && cvv && expiryDate) {
      navigate("/confirmation");
    } else {
      alert("Please fill in all the fields.");
    }
  };

  return (
    <div className="info-container">
      <h2 className="information-header">Your information</h2>
      <Container className="form-container">
        <Row className="row-one">
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>Full Name:</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>Card Number:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="xxxx-xxxx-xxxx-xxxx"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row className="row-two">
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>CVV:</Form.Label>
                <Form.Control
                  type=""
                  placeholder="xxx"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>Expiry Date:</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="MM/YY"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col
            nameClass="button-col"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              className="btn btn-dark"
              onClick={handleConfirmPurchase}
            >
              Confirm Purchase
            </Button>
          </Col>
        </Row>
        <Button
          className="btn btn-dark"
          style={{ float: "right" }}
          onClick={() => {
            navigate("/description");
          }}
        >
          BACK
        </Button>
      </Container>
    </div>
  );
}
