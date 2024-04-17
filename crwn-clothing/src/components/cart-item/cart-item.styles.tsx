import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  @media screen and (max-width: 800px) {
    height: 40px;
    margin-bottom: 10px;
  }
`;

export const Image = styled.img`
  width: 30%;
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;

  @media screen and (max-width: 800px) {
    padding: 0 8px;
  }
`;

export const Name = styled.span`
  font-size: 14px;
  font-weight: 700;

  @media screen and (max-width: 800px) {
    font-size: 10px;
  }
`;

export const Price = styled.span`
  font-size: 14px;
  font-weight: 700;

  @media screen and (max-width: 800px) {
    font-size: 10px;
  }
`;
