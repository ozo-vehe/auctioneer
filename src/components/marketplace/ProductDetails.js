import React from "react";
import PropTypes from "prop-types";
import { utils } from "near-api-js";
import { Card, Button, Col, Badge, Stack } from "react-bootstrap";

const ProductDetails = ({ product, productDetails }) => {
  const {
    id,
    name,
    description,
    sold,
    image,
    owner,
    price,
    bidders,
    bids,
    created,
  } = product;
  console.log(product);

  const bidEndTimestamp =
    Number(product.created) + Number(product.duration) * 60000;
  const endTime = new Date(Number(bidEndTimestamp));
  const createdTime = new Date(Number(created));

  const biddersDetails = () => {
    let details = [];
    for (let i = 0; i < bidders.length; i++) {
      let eachBidders = {};
      eachBidders.bidder = bidders[i];
      eachBidders.bid = bids[i];

      details.push(eachBidders);
    }
    return details;
  };

  return (
    <>
      <p
        onClick={() => {
          productDetails(false);
        }}
        style={{cursor: "pointer"}}
      >
        Back
      </p>
      <div key={id}>
        <div className="">
          <img
            src={image}
            width={400}
            height={300}
            alt={name}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="" style={{ width: "400px", marginTop: "10px", display: "flex", flexDirection: "column", gap: "0px" }}>
          <p style={{marginBlock: "5px"}}>Owner: {owner}</p>
          <p style={{marginBlock: "5px"}}>Name: {name}</p>
          <p style={{marginBlock: "5px"}} className="d-flex">
            <span style={{ width: "150px" }}>Created At:</span>{" "}
            <span>{createdTime.toString()}</span>
          </p>
          <p style={{marginBlock: "5px"}} className="d-flex">
            <span style={{ width: "150px" }}>Ends At:</span>{" "}
            <span>{endTime.toString()}</span>
          </p>

          <p style={{marginBlock: "5px"}} className="d-flex">
            <span style={{ width: "150px" }}>Description:</span>{" "}
            <span>{description}</span>
          </p>
          <p style={{marginBlock: "5px"}}>Price: {utils.format.formatNearAmount(price)} NEAR</p>
          <p style={{marginBlock: "5px"}}>Sold: {sold.toString().toUpperCase()}</p>
          <div style={{marginBlock: "5px"}} className="d-flex">
            <p style={{ width: "150px" }}>Bidders:</p>
            {bidders.length > 0 ? (
              <>
                {biddersDetails.map((bidder, index) => (
                  <p key={index}>
                    <span>Bidder: {bidder.bidder}</span>
                    <span>Bid: {bidder.bid}</span>
                  </p>
                ))}
              </>
            ) : (
              <p>No bidders</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

ProductDetails.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};

export default ProductDetails;
