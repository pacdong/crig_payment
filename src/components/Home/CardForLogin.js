import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import styled from "styled-components";
import { REQUEST_PURCHASE_AUTHCODE } from "../../graphql/mutation";
import colors from "../../styles/colors";

const View = styled.div`
  width: 100%;
  /* height: 44vh; */
  /* ${(props) => (props.request ? "height: 44vh" : "height: 32vh")} */
  background-color: ${colors.emptyBackgroundColor};
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

const Card = styled.div`
  align-self: center;
  height: 100%;
  background-color: ${colors.whiteColor};
  border-radius: 14px;
  box-shadow: 4px 8px 12px 0px ${colors.shadowColor};
`;
const Header = styled.div`
  width: 100%;
  padding: 20px;
`;
const HeaderText = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
`;
const Container = styled.div`
  flex-direction: column;
  padding: 20px;
  display: flex;
`;
const Box = styled.div`
  margin-bottom: 10px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const SubmitButton = styled.button`
  outline: none;
  box-shadow: 0px;
  width: 20%;
  background-color: ${colors.whiteColor};
  padding: 8px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid ${colors.blackColor};
`;
const Text = styled.span`
  font-size: 1rem;
  margin-bottom: 10px;
`;
const TextInput = styled.input`
  border-radius: 0px;
  padding: 10px;
  box-shadow: none;
  font-size: 1em;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  outline: none;
  border-width: 0 0 0.5px;
  /* margin-bottom: 20px; */
  &:focus {
    border-color: ${colors.activeColor};
    border-width: 0 0 1px;
  }
`;

function CardForLogin({ phoneNumberInput, authNumberInput }) {
  const [request, setRequest] = useState(false);
  const [requestPurchaseAuthcodeMutation] = useMutation(
    REQUEST_PURCHASE_AUTHCODE
  );

  const requestAuthCode = async () => {
    if (phoneNumberInput.value === "") {
      return window.alert("폰번호를 입력해주세요");
    }
    setRequest(!request);
    try {
      const { data } = requestPurchaseAuthcodeMutation({
        variables: {
          phoneNumber: phoneNumberInput.value,
        },
      });
      if (data) {
        return window.alert("입력된 코드와 함께 인증하기 버튼을 눌러주세요.");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View request={request}>
      <Card>
        <Header>
          <HeaderText>결제요청 본인인증</HeaderText>
        </Header>
        <Container>
          <Text>휴대폰 번호</Text>
          <Box>
            <TextInput
              placeholder="`-` 없이 입력해주세요"
              maxLength={12}
              // type="number"
              {...phoneNumberInput}
            />
            <SubmitButton onClick={requestAuthCode}>
              {request ? "완료" : "보내기"}
            </SubmitButton>
          </Box>
          {request && (
            <>
              <Text>인증번호</Text>
              <TextInput
                placeholder="`-` 없이 입력해주세요"
                maxLength={6}
                // type="number"
                {...authNumberInput}
              />
            </>
          )}
        </Container>
      </Card>
    </View>
  );
}

export default React.memo(CardForLogin);
