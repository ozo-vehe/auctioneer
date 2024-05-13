import React, { useCallback, useEffect, useState } from "react";
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
  const [home, setHome] = useState(true);

  const account = window.walletConnection.account();
  const [balance, setBalance] = useState("0");
  const getBalance = useCallback(async () => {
    if (account.accountId) {
      setBalance(await accountBalance());
    }
  });

  useEffect(() => {
    getBalance();
  }, [getBalance]);

  return (
    <>
      {/* <Notification /> */}
      {account.accountId ? (
        <Container fluid="md">
          <Nav className="justify-content-end align-items-center gap-4 pt-3 pb-5">
            <Nav.Item>
              <button
                onClick={() => {
                  setProfile(false);
                  setHome(true);
                }}
                type="button"
                className="border px-3 py-1 rounded-pill btn btn-outline-dark"
              >
                Home
              </button>
            </Nav.Item>
            <Nav.Item>
              <button
                onClick={() => {
                  setProfile(true);
                  setHome(false);
                }}
                type="button"
                className="border px-3 py-1 rounded-pill btn btn-outline-dark"
              >
                Profile
              </button>
            </Nav.Item>
            <Nav.Item>
              <Wallet
                address={account.accountId}
                amount={balance}
                symbol="NEAR"
                destroy={destroy}
              />
            </Nav.Item>
          </Nav>
          <main>
            {profile && <Profile user={account.accountId} />}
            {home && <Products />}
          </main>
        </Container>
      ) : (
        <Cover name="Street Food" login={login} coverImg={coverImg} />
      )}
    </>
  );
};

export default App;
