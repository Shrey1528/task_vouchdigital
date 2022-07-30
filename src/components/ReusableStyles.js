import styled, { css } from "styled-components";

export const Div = styled.div`
  font-family: "Inter", sans-serif;
  ${(props) =>
    props.con &&
    css`
      a {
        font-size: 2rem;
        font-weight: 600;
        padding-left: 3rem;
        color: #12264c;
      }
      span {
        color: #e1ad1f;
      }
    `}
  ${(props) =>
    props.buttons &&
    css`
      display: flex;
      gap: 1rem;
      padding-right: 18rem;
      font-size: 1.1rem;
      button {
        min-width: 100%;
        padding: 10px 10px;
        color: #ffffff;
        background-color: #12264c;
        border: none;
        border-radius: 10px;
      }
      .login {
        background-color: #e1ad1f;
      }
    `}
  ${(props) =>
    props.form &&
    css`
      text-align: center;
      margin-top: 20%;
      h1 {
        font-weight: 600;
        margin-bottom: 0;
      }
      p {
        font-size: 1.1rem;
        margin-bottom: 3rem;
      }
    `}
  ${(props) =>
    props.input &&
    css`
      display: flex;
      gap: 0.4rem;
      input[type="checkbox"] {
        height: 1rem;
        width: 1rem;
        margin-top: 0.4rem;
        &:hover {
          cursor: pointer;
        }
      }
      input[type="checkbox"]:checked {
        accent-color: #12264c;
      }
    `}
  ${(props) =>
    props.check &&
    css`
      display: flex;
      gap: 9.5rem;
      justify-content: center;
      font-size: 1.1rem;
      a {
        text-decoration: none;
        color: black;
      }
    `}
    
  ${(props) =>
    props.submit &&
    css`
      margin-top: 2rem;
      margin-bottom: 1rem;
      display: flex;
      justify-content: center;
      button {
        width: 58%;
        padding: 10px 20px;
        font-size: 1.2rem;
        color: #ffffff;
        background-color: #12264c;
        border: none;
      }
    `}
`;
