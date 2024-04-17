import styled from "styled-components";

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
    font-size: 14px;
    user-select: none;
  }

  @media screen and (max-width: 800px) {
    top: 50px;
    right: 18px;
    width: 120px;
    height: 170px;
    padding: 8px;

    ${BaseButton},
    ${GoogleSignInButton},
    ${InvertedButton} {
      min-width: 90%;
      height: 32px;
      font-size: 8px;
      padding: 4px 0;
    }
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;

  @media screen and (max-width: 800px) {
    font-size: 10px;
    margin: 20px auto;
  }
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;

  @media screen and (max-width: 800px) {
    height: 120px;
  }
`;
