import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors";

const View = styled.div`
  width: 100%;
  height: 40vh;
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
const Container = styled.div``;
const Box = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;
const Text = styled.span`
  font-size: 1.2rem;
`;

function CardForPay({ price = 0 }) {
  const comma = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <View>
      <Card>
        <Header>
          <HeaderText>결제 요청 정보</HeaderText>
        </Header>
        <Container>
          <Box>
            <Text>선택한 대수</Text>
            <Text>0 대</Text>
          </Box>
          <Box>
            <Text>금액 정보</Text>
            <Text>{comma} 원</Text>
          </Box>
        </Container>
      </Card>
    </View>
  );
}

export default React.memo(CardForPay);