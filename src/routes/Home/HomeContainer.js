import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CONFIRM_PURCHASE_AUTHCODE } from "../../graphql/mutation";
import useInput from "../../hooks/useInput";
import HomePresenter from "./HomePresenter";

const HomeContainer = () => {
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [payData, setPayData] = useState(false);

  const phoneNumberInput = useInput("");
  const authNumberInput = useInput("");

  const [confirmCodeMutation] = useMutation(CONFIRM_PURCHASE_AUTHCODE);

  const handleLogIn = async () => {
    console.log(
      "핸드폰번호",
      phoneNumberInput.value,
      typeof phoneNumberInput.value
    );
    console.log(
      "인증번호",
      authNumberInput.value,
      typeof authNumberInput.value
    );
    setLoading(true);
    if (phoneNumberInput.value === "" || authNumberInput.value === "") {
      return window.alert("먼저 핸드폰 인증을 받아주세요");
    }
    try {
      const { data } = await confirmCodeMutation({
        variables: {
          phoneNumber: phoneNumberInput.value,
          authCode: authNumberInput.value,
        },
      });
      console.log(data);
      if (data.confirmPurchaseAuthCode) {
        setPayData(data.confirmPurchaseAuthCode);
        setIsLoggedIn(true);
        return;
      }
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
      payData={payData}
    />
  );
};

export default HomeContainer;
