import React, { useState } from "react";
import PropTypes from "prop-types";
import { utils } from "near-api-js";
import { Button } from "react-bootstrap";

const ProductDetails = ({ product, productDetails }) => {
  const [showProductDetails, setShowProductDetails] = useState(false);
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
  const daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthsOfTheYear = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const bidEndTimestamp =
    Number(product.created) + Number(product.duration) * 60000;
  const endTime = new Date(Number(bidEndTimestamp));
  const createdTime = new Date(Number(created));

  const formattedTime = (time) => {
    return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
  };
  const formattedDate = (date) => {
    return `${daysOfTheWeek[date.getDay()]} ${date.getDate()} ${
      monthsOfTheYear[date.getMonth()]
    }, ${date.getFullYear()}`;
  };

  // console.log(formattedTime, formattedDate);

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
      <Button
        variant="outline-dark"
        onClick={() => setShowProductDetails(!showProductDetails)}
        className="w-100 py-3"
      >
        See more
      </Button>
      <div
        style={{
          position: "fixed",
          zIndex: 10,
          top: "0px",
          left: "0px",
          width: "100%",
          minHeight: "100vh",
          paddingTop: "20px",
          margin: "0px",
        }}
        className={`d-flex justify-content-start flex-column align-items-center bg-light ${
          showProductDetails ? "d-flex" : "d-none"
        }`}
      >
        <p
          onClick={() => setShowProductDetails(!showProductDetails)}
          style={{
            cursor: "pointer",
            fontSize: "16px",
            borderWidth: 1,
            borderColor: "black",
            borderStyle: "solid",
            padding: "5px 25px",
            borderRadius: "5px",
            backgroundColor: "white",
          }}
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
          <div className="mt-4" style={{ width: "400px", textAlign: "left" }}>
            <table>
              <tbody>
                <tr>
                  <td>Product ID:</td>
                  <td>{id}</td>
                </tr>
                <tr>
                  <td>Owner:</td>
                  <td>{owner}</td>
                </tr>
                <tr>
                  <td>Name:</td>
                  <td>{name}</td>
                </tr>
                <tr>
                  <td>Description:</td>
                  <td>{description}</td>
                </tr>
                <tr>
                  <td>Created:</td>
                  <td>
                    {formattedDate(createdTime)} {formattedTime(createdTime)}
                  </td>
                </tr>
                <tr>
                  <td>Ends:</td>
                  <td>
                    {formattedDate(endTime)} {formattedTime(endTime)}
                  </td>
                </tr>
                <tr>
                  <td>Duration:</td>
                  <td>{product.duration} minutes</td>
                </tr>
                <tr>
                  <td>Price:</td>
                  <td>{utils.format.formatNearAmount(price)} NEAR</td>
                </tr>
                <tr>
                  <td>Sold:</td>
                  <td>{sold.toString().toUpperCase()}</td>
                </tr>
                <tr>
                  <td>Bidders:</td>
                  <td>
                    <table className="border w-100">
                      <thead>
                        <th>Bidder</th>
                        <th>Bid</th>
                      </thead>
                      <tbody className="border">
                        {bidders.length > 0 ? (
                          <>
                            {biddersDetails().map((bidder, index) => (
                              <tr key={index}>
                                <td>{bidder.bidder}</td>
                                <td>
                                  {utils.format.formatNearAmount(bidder.bid)}{" "}
                                  NEAR
                                </td>
                              </tr>
                            ))}
                          </>
                        ) : (
                          <p className="m-0">No bidders</p>
                        )}
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
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
