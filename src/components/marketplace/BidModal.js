import React, { useState } from "react";
import PropTypes from "prop-types";
import { utils } from "near-api-js";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";

const BidModal = ({ bid, product }) => {
  const [bidAmount, setBid] = useState(0);
  const formattedPrice = utils.format.formatNearAmount(product.price);
  const formattedBid = product.bid && utils.format.formatNearAmount(product.bid);

  const isFormFilled = () => bidAmount > formattedBid && bidAmount > formattedPrice;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const triggerBid = () => {
    console.log(isFormFilled());
    if(isFormFilled()) bid(product.id, bidAmount);
    else alert("Bid should be higher then the current bid amount")
  };

  return (
    <>
      <Button
        variant="outline-dark"
        onClick={handleShow}
        className="w-100 py-3"
      >
        Place Bid
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Bid Modal</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Header>
            <p className="p-0 m-0">{`Highest Bid: ${product.bid ? formattedBid : formattedPrice} NEAR`}</p>
          </Modal.Header>
          <Modal.Body>
            <FloatingLabel controlId="inputBid" label="Bid" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Bid"
                onChange={(e) => {
                  setBid(e.target.value);
                }}
              />
            </FloatingLabel>
          </Modal.Body>
        </Form>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="dark"
            disabled={!isFormFilled()}
            onClick={triggerBid}
          >
            Bid
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

BidModal.propTypes = {
  bid: PropTypes.func.isRequired,
};

export default BidModal;
