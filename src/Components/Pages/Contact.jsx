import React from "react";
import "./Contact.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ContactUs() {
  return (
    <div className="full-container">
      <h2 className="contact-header">Loaction and Details </h2>
      <Container className="contact-container">
        <Row>
          <Col className="map">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.276022550762!2d-75.68836612430637!3d45.42393693612503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0506f94eca95%3A0x813487d1587f84e9!2sHamelin%20Hall%20(MHN)!5e0!3m2!1sen!2sca!4v1686263391737!5m2!1sen!2sca"
              width="900"
              height="600"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
          <Col className="location-details">
            <h1 className="loaction-details-header">Jewellerina</h1>
            <p className="location-details-text">
              70 Laurier Ave E, <br />
              Ottawa, Ontario <br />
              K1N 6N6 <br />
              Jewellerina@gmail.com <br />
              (123)-456-789
            </p>
            <h2 className="hours-details-header">Opening Hours</h2>
            <p className="hours-details-text">
              Weekdays: <br />
              5:00am-12:00am <br />
              Weekdends: <br />
              6:00am-10:00am
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
