import React, { useEffect, useState, useCallback } from "react";
import AddProduct from "./AddProduct";
import Product from "./Product";
import Loader from "../utils/Loader";
import { Row } from "react-bootstrap";
import {
  getProducts as getProductList,
  createProduct,
  withdrawBid,
} from "../../utils/marketplace";

const Profile = ({ user }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = useCallback(async () => {
    try {
      setLoading(true);
      const products = await getProductList();
      const userProducts = [];
      products.forEach((product) => {
        if (product.owner === user) {
          userProducts.push(product);
        }
      });
      setProducts(userProducts);
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
      // <NotificationSuccess text="Product added successfully." />;
    } catch (error) {
      console.log({ error });
      // <NotificationError text="Failed to create a product." />;
    } finally {
      setLoading(false);
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
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="fs-4 fw-bold mb-0">{user}</h1>
            <AddProduct save={addProduct} />
          </div>
          {products.length > 0 ? (
            <Row xs={1} sm={2} lg={3} className="g-3 mb-5 g-xl-4 g-xxl-5">
              {products.map((_product) => (
                <Product
                  product={{
                    ..._product,
                  }}
                  withdraw={withdraw}
                />
              ))}
            </Row>
          ) : (
            <p className="fs-5">No products available</p>
          )}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Profile;
