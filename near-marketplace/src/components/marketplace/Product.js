import React from "react";
import PropTypes from "prop-types";
import { utils } from "near-api-js";
import { Card, Button, Col, Badge, Stack } from "react-bootstrap";

const Product = ({ product, bid, withdraw }) => {
  const { id, price, name, description, sold, location, image, owner } =
    product;
  console.log(product);
  const bidEndTimestamp = (Number(product.created)) + (Number(product.duration) * 60000);
  const time = Math.round((bidEndTimestamp - Date.now()) / 1000 / 60);
  const isEnded = time < 0;

  // const getEndTime = async () => {
  //   const time = new Date(endTime);
  //   return time;
  // }

  // getEndTime()
  

  const triggerBid = () => {
    bid(id, price);
  };
  const triggerWithdraw = () => {
    withdraw(id);
  };

  return (
    <Col key={id}>
      <Card className=" h-100">
        <Card.Header>
          <Stack className="d-flex flex-wrap" direction="horizontal" gap={2}>
            <span className="font-monospace text-secondary">Owner: {owner}</span>
            <Badge bg="secondary" className="ms-auto">
              {sold && <>Sold</>}
            </Badge>
            {!sold && (
              <div className="w-100 d-flex flex-wrap justify-content-between">
                <span className="font-monospace text-secondary">Highest bid: {product.bid ? product.bid: 0}</span>
                <span className="font-monospace text-secondary">{isEnded ? ("Bid ended") : (`Time left: ${time} minutues`)}</span>
              </div>
            )}
          </Stack>
        </Card.Header>
        <div className=" ratio ratio-4x3">
          <img src={image} alt={name} style={{ objectFit: "cover" }} />
        </div>
        <Card.Body className="d-flex  flex-column text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Text className="flex-grow-1 ">{description}</Card.Text>
          {sold || isEnded ? (
            <Button
              variant="outline-dark"
              onClick={triggerWithdraw}
              className="w-100 py-3"
            >
              Withdraw bid
            </Button>
          ) : (
            <Button
              variant="outline-dark"
              onClick={triggerBid}
              className="w-100 py-3"
            >
              Place a bid for {utils.format.formatNearAmount(price)} NEAR
            </Button>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

Product.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
  bid: PropTypes.func.isRequired,
};

export default Product;
