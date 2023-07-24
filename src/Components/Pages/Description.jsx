import React from "react";
import "./Description.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useLocation } from "react-router";
import { useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../../App.js";

function Description() {
  const navigate = useNavigate();
  
  const {cart, setCart} = useContext(ShopContext);

  const {state} = useLocation();
  console.log(state);

  const [itemState, setItemState] = useState(state);

  return (
    <div className="description-container">
      <h1 className="description-title">Item Details</h1>
      <Container className="contact-container">
        <Row>
          <Col className="item">
            <img src={itemState.image}></img>
          </Col>
          <Col className="item-details">
            <h1 className="item-details-header">{itemState.name}</h1>
            <h5 className="item-type">{itemState.category}</h5>
            <h3 className="item-details-title">
              {itemState.description}
            </h3>
            <p className="item-details-text">{itemState.price}</p>
            <p className="item-details-text">{itemState.secondPrice}</p>
            <h2 className="desc-details-header">Detailed Description</h2>
            <p className="desc-details-text">
              {itemState.detailedDescription}
            </p>
            <button
              className="buy-btn"
              onClick={() => {
                navigate("/information");
                // let newCart = cart;
                // newCart.push(itemState);
                // console.log(newCart)
                // setCart(newCart);
              }}
            >
              Buy Now!
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Description;
