import React from "react";
import "./Confirmation.css";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Confirmation() {
  const navigate = useNavigate();
  const bookingNumber = Math.floor(Math.random() * 1000000);

  return (
    <div className="page">
      <h1 className="header">Purchase Confirmed!</h1>
      <p className="message">
        We have succecufully received and confirmed your purchase request.{" "}
      </p>
      <p>An email confirming your purchase will be sent to you shortly </p>
      <p>Purchase Number: #{bookingNumber} </p>
      <div className="button">
        <Button
          className="btn btn-dark"
          onClick={() => {
            navigate("/shop");
          }}
        >
          Keep Shopping
        </Button>
      </div>
    </div>
  );
}
