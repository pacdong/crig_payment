import { gql } from "@apollo/client";

export const REQUEST_PURCHASE_AUTHCODE = gql`
  mutation requestPurchaseAuthCode($phoneNumber: String!) {
    requestPurchaseAuthCode(phoneNumber: $phoneNumber)
  }
`;

export const CONFIRM_PURCHASE_AUTHCODE = gql`
  mutation confirmPurchaseAuthCode($phoneNumber: String!, $authCode: String!) {
    confirmPurchaseAuthCode(phoneNumber: $phoneNumber, authCode: $authCode) {
      id
      phoneNumber
      craneNames {
        id
        craneName
      }
      price
      authCode
    }
  }
`;
