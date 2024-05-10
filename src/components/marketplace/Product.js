import React, { useState } from "react";
import PropTypes from "prop-types";
import { utils } from "near-api-js";
import { Card, Button, Col, Badge, Stack } from "react-bootstrap";
import BidModal from "./BidModal";
import ProductDetails from "./ProductDetails";

const Product = ({ product, bid, withdraw }) => {
  const [showProductDetails, setShowProductDetails] = useState(false);
  const { id, name, description, sold, image, owner } = product;
  const bidEndTimestamp =
    Number(product.created) + Number(product.duration) * 60000;
  // console.log(bidEndTimestamp, Date.now())
  const time = Math.round((bidEndTimestamp - Date.now()) / 1000 / 60);
  const isEnded = time < 0;
  const isOwner = product.owner === window.accountId;

  const triggerWithdraw = () => {
    withdraw(id);
  };

  const bidButton = () => {
    if (isOwner) {
      if (isEnded && !sold) {
        return (
          <>
            <Button
              variant="outline-dark"
              onClick={triggerWithdraw}
              className="w-100 py-3"
            >
              Withdraw bid
            </Button>
            <p
              style={{ cursor: "pointer" }}
              onClick={() => setShowProductDetails(!showProductDetails)}
            >
              See more
            </p>
          </>
        );
      }
    } else if (!isOwner) {
      if (!isEnded) {
        return (
          <>
            <BidModal bid={bid} product={product} />
            <p
              style={{ cursor: "pointer" }}
              onClick={() => setShowProductDetails(!showProductDetails)}
            >
              See more
            </p>
          </>
        );
      }
    }
  };

  return (
    <>
      {!showProductDetails ? (
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
              {bidButton()}
            </Card.Body>
          </Card>
        </Col>
      ) : (
        <ProductDetails
          product={product}
          productDetails={(data) => {
            console.log(data);
            setShowProductDetails(data);
          }}
        />
      )}
    </>
  );
};

Product.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};

export default Product;
