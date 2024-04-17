import styled from "styled-components";

import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";

export const ShoppingIcon = styled(ShoppingSvg)`
  width: 24px;
  height: 24px;

  @media screen and (max-width: 800px) {
    width: 18px;
    height: 18px;
  }
`;

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    width: 18px;
    height: 18px;
  }
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
  user-select: none;

  @media screen and (max-width: 800px) {
    font-size: 8px;
    bottom: 1px;
  }
`;
