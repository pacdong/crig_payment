import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CONFIRM_PURCHASE_AUTHCODE } from "../../graphql/mutation";
import useInput from "../../hooks/useInput";
import HomePresenter from "./HomePresenter";

const HomeContainer = () => {
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [payData, setPayData] = useState({
    TPH: { phoneNumber: "", price: 0 },
    craneNames: [],
  });

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

  const handlePay = () => {
    console.log("페이실행");
    const userCode = "imp76012341";
    const pgData = {
      pg: "html5_inicis", // PG사
      pay_method: "card", // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: payData.TPH.price, // 결제금액
      name: payData.craneNames.join(""), // 주문명
      buyer_tel: payData.TPH.phoneNumber, // 구매자 전화번호
    };
    try {
      const { IMP } = window;
      IMP.init(userCode);
      IMP.request_pay(pgData, afterPay);
    } catch (e) {
      console.log(e);
    }
  };

  const afterPay = async () => {
    console.log("결제 성공");
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
      handlePay={handlePay}
    />
  );
};

export default HomeContainer;
