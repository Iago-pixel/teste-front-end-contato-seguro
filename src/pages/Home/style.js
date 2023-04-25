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
  .users-box {
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
  .user-buttons {
    text-align: right;
    > button {
      margin-left: 1rem;
    }
  }
`;
