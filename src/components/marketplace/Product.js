import React, { useState } from "react";
import PropTypes from "prop-types";
import { utils } from "near-api-js";
import { Card, Button, Col, Badge, Stack } from "react-bootstrap";
import BidModal from "./BidModal";
import ProductDetails from "./ProductDetails";

const Product = ({ product, bid, withdraw }) => {
  const { id, name, description, sold, image, owner, created, duration } = product;
  console.log(product);
  const bidEndTimestamp =
    Number(created) + Number(duration) * 60000;
  // console.log(bidEndTimestamp, Date.now())
  const time = Math.round((bidEndTimestamp - Date.now()) / 1000 / 60);
  const isEnded = time < 0;
  const isOwner = owner === window.walletConnection.getAccountId();
  console.log(window.accountId);

  const triggerWithdraw = () => {
    if(product.bid <=0) {
      alert("No bid to withdraw");
      return;
    }
    withdraw(id);
  };

  const bidButton = () => {
    if (isOwner) {
      if (isEnded && !sold) {
        return (
          <Button
            variant="outline-dark"
            onClick={triggerWithdraw}
            className="w-100 py-3"
          >
            Withdraw bid
          </Button>
        );
      }
    } else if (!isOwner) {
      console.log(isOwner)
      if (!isEnded) {
        return <BidModal bid={bid} product={product} />;
      }
    }
  };

  return (
        <Col key={id}>
          <Card className=" h-100">
            <Card.Header>
              <Stack
                className="d-flex flex-wrap"
                direction="horizontal"
                gap={2}
              >
                <span className="font-monospace text-secondary">
                  Owner: {owner}
                </span>
                <Badge bg="secondary" className="ms-auto">
                  {sold && <>Sold</>}
                </Badge>
                {!sold && (
                  <div className="w-100 d-flex flex-wrap justify-content-between">
                    <span className="font-monospace text-secondary">
                      Highest bid:{" "}
                      {product.bid
                        ? `${utils.format.formatNearAmount(product.bid)} NEAR`
                        : 0}
                    </span>
                    <span className="font-monospace text-secondary">
                      {isEnded ? "Bid ended" : `Time left: ${time} minutues`}
                    </span>
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
              <div className="d-flex gap-4 align-items-center justify-content-center">
                {bidButton()}
                <ProductDetails product={product} />
              </div>
            </Card.Body>
          </Card>
        </Col>
  );
};

Product.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};

export default Product;
