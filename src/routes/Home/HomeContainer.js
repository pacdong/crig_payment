import React, { useState } from "react";
import HomePresenter from "./HomePresenter";

const HomeContainer = () => {
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoffedIn] = useState(false);

  const getSecretNumber = async () => {
    setLoading(true);
    try {
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  const handleLogIn = async () => {
    setLoading(true);
    try {
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  return (
    <HomePresenter
      price={price}
      isLoggedIn={isLoggedIn}
      loading={loading}
      handleLogIn={handleLogIn}
    />
  );
};

export default HomeContainer;
