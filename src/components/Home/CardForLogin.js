import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors";

const View = styled.div`
  width: 100%;
  height: 44vh;
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
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
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
  margin-bottom: 20px;
  &:focus {
    border-color: ${colors.activeColor};
    border-width: 0 0 1px;
  }
`;

function CardForLogin() {
  return (
    <View>
      <Card>
        <Header>
          <HeaderText>결제요청 본인인증</HeaderText>
        </Header>
        <Container>
          <Text>휴대폰 번호</Text>
          <TextInput
            placeholder="`-` 없이 입력해주세요"
            maxLength={12}
            type="number"
          />
          <Text>인증번호</Text>
          <TextInput
            placeholder="`-` 없이 입력해주세요"
            maxLength={6}
            type="number"
          />
        </Container>
      </Card>
    </View>
  );
}

export default React.memo(CardForLogin);
