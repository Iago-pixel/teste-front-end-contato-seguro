import styled from "styled-components";

const StyledForm = styled.form`
  width: 37rem;
  display: flex;
  justify-content: space-between;
  select {
    border: 1px solid #c6c6c6;
    border-radius: 5px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    text-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    color: grey;
    width: 7rem;
    padding: 0 0 0 5px;
    magim: 0;
    height: 34px;
  }
  .search-input {
    width: 25rem;
  }
`;

export default StyledForm;
