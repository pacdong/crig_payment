import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import CRANEHOOK from "../../assets/CraneHook.png";
import CardForPay from "../../components/Home/CardForPay";
import PayButton from "../../components/PayButton";
import CardForLogin from "../../components/Home/CardForLogin";

const BackView = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  /* background-color: ${colors.whiteColor}; */
  justify-content: flex-start;
  flex-direction: column;
`;

const Payment = styled.div`
  background-color: red;
  width: 100%;
  height: 28vh;
  background-color: ${colors.activeColor};
  padding: 16px;
  justify-content: space-around;
  align-items: space-around;
`;

const PaymentHeader = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  flex: 1;
`;
const Logo = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
  color: ${colors.whiteColor};
`;
const CenterBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  object-fit: contain;
  width: 30%;
  height: 15vh;
  border-radius: 15px;
`;

const PaymentCenter = styled.span`
  color: ${colors.whiteColor};
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 2px;
`;

const BottomBlock = styled.div``;

const PaymentBottom = styled.span`
  color: ${colors.whiteColor};
`;

function HomePresenter({
  price = 0,
  isLoggedIn = false,
  loading = false,
  handleLogIn = () => null,
  phoneNumberInput,
  authNumberInput,
}) {
  return (
    <BackView>
      <Payment>
        <PaymentHeader>
          <Logo>CRRIGGING</Logo>
          <CenterBlock>
            <TextBlock>
              <PaymentCenter>크레인의 모든 것,</PaymentCenter>
              <PaymentCenter>크리깅에서</PaymentCenter>
            </TextBlock>
            <Image src={CRANEHOOK} />
          </CenterBlock>
          <BottomBlock>
            {isLoggedIn ? (
              <PaymentBottom>아래 결제정보를 확인해주세요</PaymentBottom>
            ) : (
              <PaymentBottom>결제를 위해 본인인증 해주세요</PaymentBottom>
            )}
          </BottomBlock>
        </PaymentHeader>
      </Payment>
      {isLoggedIn ? (
        <CardForPay price={price} />
      ) : (
        <CardForLogin
          phoneNumberInput={phoneNumberInput}
          authNumberInput={authNumberInput}
        />
      )}
      {isLoggedIn && <PayButton title="결제하기" />}
      {!isLoggedIn && <PayButton title="인증하기" />}
    </BackView>
  );
}

export default React.memo(HomePresenter);
