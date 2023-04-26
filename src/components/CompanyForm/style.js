import styled from "styled-components";

const Container = styled.div`
  .form-header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 2px solid #c6c6c6;
    > h1 {
      margin: 0;
      font-size: 1rem;
    }
    > button {
      background-color: transparent;
      border: none;
      font-weight: bold;
      color: grey;
      font-size: 1rem;
      :hover {
        cursor: pointer;
      }
    }
  }
  .input-box {
    display: flex;
    flex-direction: column;
    > label {
      margin-top: 10px;
    }
    > input {
      margin: 5px 0;
      width: 350px;
    }
    > span {
      font-size: 0.8rem;
      color: grey;
      text-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
  }
  .form-button {
    font-size: 1rem;
    width: auto;
    margin: 1rem 1rem 1rem 0;
    padding: 0 1rem;
  }
`;

export default Container;
