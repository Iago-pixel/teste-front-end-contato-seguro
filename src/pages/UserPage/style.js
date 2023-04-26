import styled from "styled-components";

export const Container = styled.div`
  background-color: #e8e8e8;
  width: 900px;
  .logo-box {
    text-align: center;
    padding: 3rem 0 1.5rem 0;
  }
  .inputs-box {
    padding: 0 3rem;
    display: flex;
    justify-content: space-between;
  }
  .companies-box {
    padding: 0 2rem;
  }
  table {
    width: 100%;
    height: 100%;
    text-align: left;
  }
  th {
    padding: 1rem 0 5px;
  }
  td {
    padding: 5px 0;
  }
  h1 {
    text-align: center;
  }
`;

export const SelectForm = styled.div`
  text-align: center;
  select {
    border: 1px solid #c6c6c6;
    border-radius: 5px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    text-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    color: grey;
    width: 7rem;
    padding: 0 0 0 5px;
    height: 34px;
  }
  button {
    font-size: 1rem;
    width: auto;
    margin-left: 1rem;
  }
  .add-company-button {
    margin: 3rem 0 1rem;
  }
`;
