import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    height: 200px;

    button {
      min-width: 100px;
      height: 40px;
      opacity: 0.7;
      top: 120px;
      display: flex;
      padding: 8px;
      font-size: 10px;
    }

    &:hover {
      img {
        opacity: 1;
      }

      button {
        opacity: 1;
        display: flex;
      }
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;

  @media screen and (max-width: 800px) {
    width: 85%;
  }
  `;

export const Price = styled.span`
  width: 10%;

  @media screen and (max-width: 800px) {
    width: 15%;
  }
  `;
