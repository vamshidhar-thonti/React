import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 18px;
  align-items: center;

  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Name = styled.span`
  font-weight: 500;
  width: 23%;
  display: flex;
`;

export const Quantity = styled.span`
  font-weight: 500;
  width: 23%;
  display: flex;
`;

export const Price = styled.span`
  font-weight: 500;
  width: 23%;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const Value = styled.span`
  margin: 0 10px;

  @media screen and (max-width: 800px) {
    margin: 0px 4px;
  }
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    padding-left: 0px;
  }
`;
