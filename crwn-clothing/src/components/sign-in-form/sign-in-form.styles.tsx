import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }

  @media screen and (max-width: 800px) {
    width: 100%;

    h2 {
      font-size: 16px;
    }

    span {
      font-size: 12px;
    }

    div,
    input {
      padding: 5px;
      margin: 8px 0;
      font-size: 10px;
    }

    form {
      margin: 20px 0;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    gap: 12px;

    button {
      min-width: 40px;
      font-size: 12px;
      padding: 0 24px;
    }
  }
`;
