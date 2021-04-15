import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CONFIRM_PURCHASE_AUTHCODE } from "../../graphql/mutation";
import useInput from "../../hooks/useInput";
import HomePresenter from "./HomePresenter";

const HomeContainer = () => {
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoffedIn] = useState(false);

  const phoneNumberInput = useInput("");
  const authNumberInput = useInput("");

  const [confirmPurchaseAuthCodeMutation] = useMutation(
    CONFIRM_PURCHASE_AUTHCODE
  );

  const handleLogIn = async () => {
    setLoading(true);
    if ((phoneNumberInput.value = "") || (authNumberInput.value = "")) {
      return window.alert("먼저 핸드폰 인증을 받아주세요");
    }
    try {
      const { data } = confirmPurchaseAuthCodeMutation();
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
      phoneNumberInput={phoneNumberInput}
      authNumberInput={authNumberInput}
    />
  );
};

export default HomeContainer;
