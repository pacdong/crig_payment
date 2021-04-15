import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";

const View = styled.button`
  width: 100%;
  /* margin-top: 10px; */
  padding: 24px;
  background-color: ${colors.whiteColor};
  border: 0px solid ${colors.blackColor};
  outline: none;
  cursor: pointer;
  box-shadow: none;
  overflow: visible;
  text-decoration: none;
  &:active {
    opacity: 0.8px;
    background-color: ${colors.activeColor};
  }
  &:focus {
    background-color: ${colors.whiteColor};
  }
`;
const Text = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;

function PayButton({ title = "", onClick }) {
  return (
    <View onClick={onClick}>
      <Text>{title}</Text>
    </View>
  );
}

export default React.memo(PayButton);
