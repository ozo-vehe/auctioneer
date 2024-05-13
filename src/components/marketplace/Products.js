import React, { useEffect, useState, useCallback } from "react";
// import { toast } from "react-toastify";
import AddProduct from "./AddProduct";
import Product from "./Product";
import Loader from "../utils/Loader";
import { Row } from "react-bootstrap";
import { NotificationSuccess, NotificationError, Notification } from "../utils/Notifications";
import {
  getProducts as getProductList,
  placeBid,
  createProduct,
  withdrawBid,
} from "../../utils/marketplace";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const getProducts = useCallback(async () => {
    try {
      setLoading(true);
      setProducts(await getProductList());
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  }, []);

  const addProduct = async (data) => {
    console.log(data);
    try {
      setLoading(true);
      createProduct(data).then((resp) => {
        getProducts();
      });
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  };

  const bid = async (id, price) => {
    console.log("Placing bid...");
    try {
      setUploading(true);
      await placeBid({
        id,
        price,
      }).then((resp) => getProducts());
      console.log("Bid placed successfully");
      
    } catch (error) {
      // <NotificationError text="Failed to purchase product." />;
      setError(true);
    } finally {
      setLoading(false);
      setUploading(false);
    }
  };

  const withdraw = async (id) => {
    try {
      await withdrawBid({
        id,
      }).then((resp) => getProducts());
      // <NotificationSuccess text="Product bought successfully" />;
    } catch (error) {
      // <NotificationError text="Failed to purchase product." />;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {!loading ? (
        <>
          {uploading && <Notification text={"uploading product"} />}
          {success && <NotificationSuccess text={"Bid placed successfully"} />}
          {error && <NotificationError text={"Failed to purchase product."} />}

          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="fs-4 fw-bold mb-0">Street Food</h1>
            <AddProduct save={addProduct} />
          </div>
          <Row xs={1} sm={2} lg={3} className="g-3 mb-5 g-xl-4 g-xxl-5">
            {products.map((_product) => (
              <Product
                key={_product.id}
                product={{
                  ..._product,
                }}
                bid={bid}
                withdraw={withdraw}
              />
            ))}
          </Row>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Products;
