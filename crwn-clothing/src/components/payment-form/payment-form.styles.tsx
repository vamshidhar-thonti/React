import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentOverlayContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 1;
`;

export const PaymentFormContainer = styled.div`
  height: 300px;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  padding-bottom: 40px;
  z-index: 2;

  @media screen and (max-width: 800px) {
    width: 80%;
    height: 200px;
  }
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;

  @media screen and (max-width: 800px) {
    min-width: 85%;
  }
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;

  @media screen and (max-width: 800px) {
    margin-top: 24px;
    font-size: 12px;
    min-width: 100px;
    padding: 4px 12px;
  }
`;

export const ClosePopUp = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 20px;
  cursor: pointer;
  z-index: 2;

  @media screen and (max-width: 800px) {
    font-size: 16px;
    top: 12px;
    right: 12px;
  }
`;
