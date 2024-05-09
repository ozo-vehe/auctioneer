import React, { useCallback, useEffect, useRef, useState } from "react";
import { Container, Nav } from "react-bootstrap";
import { login, logout as destroy, accountBalance } from "./utils/near";
import Wallet from "./components/Wallet";
// import { Notification } from "./components/utils/Notifications";
import Products from "./components/marketplace/Products";
import Cover from "./components/utils/Cover";
import coverImg from "./assets/sandwich.jpg";
import "./App.css";
import Profile from "./components/marketplace/Profile";

const App = function AppWrapper() {
  const [profile, setProfile] = useState(false);
  // let account = useRef(window.walletConnection.account());
  const account = useRef(window.walletConnection.account());

  // Change profile variable state
  const changeProfile = () => setProfile(!profile);

  const [balance, setBalance] = useState("0");
  const getBalance = useCallback(async () => {
    if (account.current.accountId) {
      setBalance(await accountBalance());
    }
  }, []);

  const setAccount = useCallback(async () => {
    if (account.current.accountId) {
      account.current = window.walletConnection.account();
    }
  }, []);

  useEffect(() => {
    getBalance();
    const getAccount = async () => {
      setAccount();
    };
    getAccount();
  }, [getBalance, setAccount]);

  return (
    <>
      {/* <Notification /> */}
      {account.current.accountId ? (
        <Container fluid="md">
          <Nav className="justify-content-end align-items-center gap-4 pt-3 pb-5">
            <Nav.Item>
              <button
                onClick={changeProfile}
                type="button"
                className="border px-3 py-1 rounded-pill btn btn-outline-dark"
              >
                Home
              </button>
            </Nav.Item>
            <Nav.Item>
              <button
                onClick={changeProfile}
                type="button"
                className="border px-3 py-1 rounded-pill btn btn-outline-dark"
              >
                Profile
              </button>
            </Nav.Item>
            <Nav.Item>
              <Wallet
                address={account.current.accountId}
                amount={balance}
                symbol="NEAR"
                destroy={destroy}
              />
            </Nav.Item>
          </Nav>
          <main>{profile ? <Profile user={account.current.accountId} /> : <Products />}</main>
        </Container>
      ) : (
        <Cover name="Street Food" login={login} coverImg={coverImg} />
      )}
    </>
  );
};

export default App;
